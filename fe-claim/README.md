# Tigerlab Claim page

---

### Setup

-global dependencies version

```
node  v16.14.0
npm  8.3.0
yarn  1.22.10
Redux DevTools  2.17.0
```

-install dependencies after clone the repo

```
yarn
```

-run it locally

```
yarn start
```

-run unit test

```
yarn test
```

-update Snapshot for unit test

```
yarn test:update
```

---

### A top-level directory layout

    .
    ├── ...
    ├── src                      # Source files
    │   ├── root                 # root config files for this app
    │   ├── router               # where we have react router components
    │   ├── ui                   # common ui components that can re-use it
    │   ├── ex: main-page        # other components that Not common and for special feature
    │   ├── api                  # files where we handle REST API
    │   ├── assets               # files and images the we use it in this app
    │   ├── webpack              # common webpack configuration for staging and production
    │   └── index                # entry point for webpack (where we start the application bundling process)
    │
    │
    ├── package                  # Test files (alternatively `spec` or `tests`)
    ├── otherConfiguration       # configuration files (like linting, testing and ts configuration)
    └── ...

---

### Tool used for development

- React
- Redux
- react-router
- Jest
- React testing-library
- styled-components (JS-in-CSS)
- Webpack

---

### Redux overview

Store init state:

```js
{
       claimState: {
          claims: [],
          filteredClaims: [],
          isFetchingClaims: false,
          isSubmittingClaim: false,
       }

}

```

Actions:

```
  FETCH_CLAIMS
  SUBMIT_CLAIM
  FILTER_CLAIMS
```

---

### UI overview

Phone:
<img width="409" alt="image" src="https://user-images.githubusercontent.com/88084506/234294960-eaf3b250-8c05-468b-a5eb-20ce4d0c8e91.png">

Desktop:

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/88084506/234294153-065992aa-08c2-4efd-8bd0-7f5f236e987c.png">
<img width="1680" alt="image" src="https://user-images.githubusercontent.com/88084506/234294598-cf18993c-3ba2-4cda-9242-ef306466d12c.png">

friendly message when we have not api issue, or. no data:
<img width="1680" alt="image" src="https://user-images.githubusercontent.com/88084506/234294481-425be453-fad2-4d61-a958-94cb918120d8.png">

loader while fetching data:
<img width="1679" alt="image" src="https://user-images.githubusercontent.com/88084506/234295427-66556a9c-961d-4c29-bd5d-fab574d556a2.png">

---

what will do if I have more time:

- adding more unit test cases
- add more types for those components which they don't have...
- add E2E test
- build infra for this app and deploy it
- Do API lookup for `policy number` field in the create...

Looking forward to your feedback 😊
