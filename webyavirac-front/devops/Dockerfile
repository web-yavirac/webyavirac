FROM nginx:1.23.0

#rutinas para copiar el codigo fuente
COPY docs/* /usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]
