FROM httpd:2.4
COPY ./dist/rc-website /usr/local/apache2/htdocs/
