# Use an official PHP image with PHP 5.6
FROM php:7.4-fpm

# Set the working directory within the container
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Install system dependencies
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev

# Configure GD extension
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install additional PHP extensions
RUN docker-php-ext-install gd pdo pdo_mysql

RUN apt-get update && apt-get install -y \
    zip unzip

RUN apt-get update && apt-get install -y \
    git



# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the application files into the container
COPY . .

RUN composer update --no-dev


# Install application dependencies
RUN composer install

# Expose the port the web server will listen on
EXPOSE 9000

# Command to start the PHP built-in server
CMD ["php", "-S", "0.0.0.0:9000", "-t", "public"]
