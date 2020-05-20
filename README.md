# Storage Finder

A rough, standalone port of the [Data Storage Finder](https://it.cornell.edu/data-storage-finder)<sup>*</sup> to [Vue.js](https://vuejs.org/)

<sup>*</sup> Created by the Cornell University Research Data Management Service Group and Cornell Information Technologies Custom Development Group (2018). Finder Module. Drupal 8. https://github.com/CU-CommunityApps/CD-finder

## Data and Descriptions

The description of features are partly made up, and partly from [here](https://princeton.service-now.com/service?id=kb_article&sys_id=4bbafffcdba1d7c0146fd206ca961924), and partly nonsense. The questions in the initial commit were taken from the Cornell app. There's no IP/license statement listed on those

## Configuration

See [`data/categories.json`](data/categories.json), [`data/features.json`](data/features.json), [`data/options.json`](data/options.json).

Each _feature_ (the checkboxes and tags) is in exactly one _category_ (categories are the questions), and each _option_ (storage service) has many features. The `id` properties link everything, as though the JSON files were little relational tables. If you poke around for a few minutes you'll be able to figure it out.

## Developing / Building

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
