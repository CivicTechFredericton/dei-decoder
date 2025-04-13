# -------- Base Build Stage --------
FROM node:20-slim AS builder

# Set working directory inside container
WORKDIR /app

# Copy only package files first (leverages layer caching)
COPY package*.json ./

# Install only prod + build deps
RUN npm ci

# Copy rest of the app
COPY . .

# Build Next.js app (App Router aware)
RUN npm run build

# -------- Runtime Stage --------
FROM node:20-slim AS runner

# Use non-root user
RUN useradd --user-group --create-home --shell /bin/false deiappuser

# Set workdir
WORKDIR /app

# Copy only what’s needed for runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Fix permissions for .next/cache/images
RUN mkdir -p /app/.next/cache/images && chown -R deiappuser:deiappuser /app/.next

# Use non-root user
USER deiappuser

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]    