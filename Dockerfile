FROM python:3-alpine
    COPY ./data /app
    WORKDIR /app
    RUN \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps
    RUN pip install flask
    RUN pip install -r requirements.txt
    EXPOSE 5000
    CMD ["python3","app.py"]