# FROM python:3-alpine
#     COPY ./data /app
#     WORKDIR /app
#     RUN \
#     apk add --no-cache postgresql-libs && \
#     apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
#     python3 -m pip install -r requirements.txt --no-cache-dir && \
#     apk --purge del .build-deps
#     RUN pip install flask
#     RUN pip install -r requirements.txt
#     EXPOSE 5000
#     CMD ["python3","app.py"]

FROM python

COPY data/requirements.txt requirements.txt
RUN pip install uwsgi && pip install -r requirements.txt

# PUERTO HTTP POR DEFECTO PARA uwsgi
ARG UWSGI_HTTP_PORT=8000
ENV UWSGI_HTTP_PORT=$UWSGI_HTTP_PORT

# APLICACION POR DEFECTO PARA uWSGI
ARG UWSGI_APP=data
ENV UWSGI_APP=$UWSGI_APP

# SE CREA UN USUARIO PARA ARRANCAR UWSGI
RUN useradd -ms /bin/bash admin
USER admin

# COPIAR EL CONTENIDO DE LA APP
COPY data /data

# COPIAR FICHERO CON CONFIGURACION UWSGI
COPY data/uwsgi.ini uwsgi.ini

# ESTABLECER DIRECTORIO DE TRABAJO
WORKDIR /data


# CREAR VOLUMEN 
VOLUME /data

# INICIAR EL UWSGI
ENTRYPOINT [ "uwsgi", "--ini", "/uwsgi.ini" ]