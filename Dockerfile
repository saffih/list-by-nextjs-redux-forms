FROM node:argon

RUN mkdir -p /usr/app/
ADD ./app/pages/ /usr/app/pages/
ADD ./app/package.json /usr/app/package.json

#ENV PATH="/usr/local/bin/:$PATH"
RUN npm install --global yarn

#ENV PATH="node_modules/.bin/:$PATH"
WORKDIR /usr/app
RUN cd /usr/app
RUN yarn

EXPOSE 3000
