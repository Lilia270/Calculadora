# NPM Text Job
npm-test: 
    runs-on: ubuntu-latest
    needs: build 
    steps: 
     - name: Checkout
       uses: actions/checkout@v3
    -  name: Set up Node.js
       uses: actions/setup-node@v2
       with:
        node-version: '14' # You can specify the desired Node.Js version
    -  name: Install Dependencies
       rub : npm install
    -  name: Run NPM Test 
       run: npm test
