FROM node:argon

RUN mkdir -p /usr/app/

#ENV PATH="node_modules/.bin/:app/node_modules/.bin/:$PATH"
ENV PATH="/usr/local/bin/:$PATH"
RUN npm install --global yarn

WORKDIR /usr/app
RUN cd /usr/app

EXPOSE 3000
