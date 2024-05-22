# React Redux

Official React bindings for [Redux](https://github.com/reduxjs/redux).
Performant and flexible.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/reduxjs/react-redux/test.yml?style=flat-square) [![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![#redux channel on Discord](https://img.shields.io/badge/discord-redux@reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

## Installation

### Create a React Redux App

The recommended way to start new apps with React and Redux is by using [our official Redux+TS template for Vite](https://github.com/reduxjs/redux-templates), or by creating a new Next.js project using [Next's `with-redux` template](https://github.com/vercel/next.js/tree/canary/examples/with-redux).

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

```bash
# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app
```

### An Existing React App

React Redux 8.0 requires **React 16.8.3 or later** (or React Native 0.59 or later).

To use React Redux with your React app, install it as a dependency:

```bash
# If you use npm:
npm install react-redux

# Or if you use Yarn:
yarn add react-redux
```

You'll also need to [install Redux](https://redux.js.org/introduction/installation) and [set up a Redux store](https://redux.js.org/recipes/configuring-your-store/) in your app.

This assumes that you’re using [npm](http://npmjs.com/) package manager
with a module bundler like [Webpack](https://webpack.js.org/) or
[Browserify](http://browserify.org/) to consume [CommonJS
modules](https://webpack.js.org/api/module-methods/#commonjs).

If you don’t yet use [npm](http://npmjs.com/) or a modern module bundler, and would rather prefer a single-file [UMD](https://github.com/umdjs/umd) build that makes `ReactRedux` available as a global object, you can grab a pre-built version from [cdnjs](https://cdnjs.com/libraries/react-redux). We _don’t_ recommend this approach for any serious application, as most of the libraries complementary to Redux are only available on [npm](http://npmjs.com/).

## Documentation

The React Redux docs are published at **https://react-redux.js.org** .

## How Does It Work?

The post [The History and Implementation of React-Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)
explains what it does, how it works, and how the API and implementation have evolved over time.

There's also a [Deep Dive into React-Redux](https://blog.isquaredsoftware.com/2019/06/presentation-react-redux-deep-dive/) talk that covers some of the same material at a higher level.

## License

[MIT](LICENSE.md)

# chat 

Getting Started with React Redux
React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

Installation
React Redux 8.x requires React 16.8.3 or later / React Native 0.59 or later, in order to make use of React Hooks.

Create a React Redux App
The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

bash
Copy code
# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
Learning React Redux
Learn Modern Redux Livestream
Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

# See the Learn Modern Redux show notes page for a transcript and links to the example app source.


markdown
Copy code
# Getting Started with React Redux

React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

## Installation

React Redux 8.x requires **React 16.8.3 or later** / **React Native 0.59 or later**, in order to make use of React Hooks.

## Create a React Redux App

The recommended way to start new apps with React and Redux is by using our official [Redux+TS template for Vite](https://github.com/reduxjs/redux-templates), or by creating a new Next.js project using [Next's `with-redux` template](https://github.com/vercel/next.js/tree/canary/examples/with-redux).

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
Learning React Redux
Learn Modern Redux Livestream
Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

See the Learn Modern Redux show notes page for a transcript and links to the example app source.

Help and Discussion
The #redux channel of the Reactiflux Discord community is our official resource for all questions related to learning and using Redux.

For more details, visit the official React Redux documentation.

less
Copy code

### Các bước để tải nội dung này lên GitHub:

1. **Tạo Repository trên GitHub:**
   - Truy cập [GitHub](https://github.com) và đăng nhập vào tài khoản của bạn.
   - Nhấp vào biểu tượng dấu cộng (+) ở góc trên bên phải và chọn "New repository".
   - Điền tên cho repository, ví dụ: `react-redux-getting-started`.
   - Thêm mô tả (tuỳ chọn).
   - Chọn chế độ public hoặc private tuỳ theo ý muốn của bạn.
   - Nhấp vào "Create repository".

2. **Tạo file `README.md` trên máy tính của bạn:**
   - Tạo một file mới tên là `README.md`.
   - Sao chép nội dung trên vào file `README.md`.

3. **Commit và Push lên GitHub:**
   - Mở terminal và điều hướng đến thư mục chứa file `README.md`.
   - Khởi tạo một Git repository (nếu chưa có):
     ```sh
     git init
     ```
   - Kết nối với repository trên GitHub:
     ```sh
     git remote add origin https://github.com/your-username/react-redux-getting-started.git
     ```
   - Thêm và commit các thay đổi:
     ```sh
     git add README.md
     git commit -m "Add Getting Started with React Redux guide"
     ```
   - Push lên GitHub:
     ```sh
     git push -u origin master
     ```

Với các bước trên, bạn sẽ có nội dung hướng dẫn về React Redux được tải lên GitHub dưới dạng một
