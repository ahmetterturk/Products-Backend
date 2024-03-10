### Products Backend

### How to run with docker
- clone repo
- run `docker-compose up --build`
  
### How to run with locally
- clone repo
- run `npm install`
- define `.env` file and set the values
  - `CONNECTION_URL='mongodb://localhost:27017/products-project'`
  - `PORT=8080`
- make sure mongodb is configured on locally
- run `npm run dev`

### File Structure
![Alt text](/images/tree.png)