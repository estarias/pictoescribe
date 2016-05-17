find . -name "*.png" -exec echo {} \; -exec convert {} -resize "100x100>" -write {} -thumbnail "100x100>" {} \;
