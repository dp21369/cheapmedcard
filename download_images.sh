#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Download logo and footer logo (updated URLs with placeholder logos)
curl -o images/logo.png "https://img.freepik.com/free-vector/medical-marijuana-cannabis-leaf-logo-design_1017-30299.jpg"
curl -o images/logo-footer.png "https://img.freepik.com/free-vector/medical-marijuana-cannabis-leaf-logo-design_1017-30299.jpg"

# Download happy woman image
curl -o images/happy-woman.jpg "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop"

# Download testimonial images
curl -o images/testimonial1.jpg "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
curl -o images/testimonial2.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
curl -o images/testimonial3.jpg "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"

echo "Images downloaded successfully!" 