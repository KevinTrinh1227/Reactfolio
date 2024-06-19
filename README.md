<p align="center">
  <a href="https://www.kevintrinh.dev" target="_blank">
    <img alt="Fav Icon Png" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/readme-icon.png" width="100"/>
  </a>
</p>
<h1 align="center">
  www.kevintrinh.dev - v2
</h1>
<p align="center">
  A modern solution for professionally showcasing skills, projects, and experience. Built with React.js.
</p>

<div align="center">
  <img src="https://api.netlify.com/api/v1/badges/bda950e2-c382-4756-8f7c-129785602a59/deploy-status" alt="Website status" /> 
  <img src="https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg" alt="Maintained status" />
  <img src="https://img.shields.io/github/v/release/KevinTrinh1227/Reactfolio.svg" alt="Release badge" />
</div>

<a href="https://kevintrinh.dev" target="_blank">
   <img alt="Screen Shot from 10-03-2023 of landing page." src="https://github.com/KevinTrinh1227/Reactfolio/assets/48145892/d5a342d5-3e49-45d1-9028-cabc663ef61a">
</a>

<details>
  <summary align="center">VIEW MORE PHOTOS HERE</summary>
    <a href="https://www.kevintrinh.dev" target="_blank">
      <img alt="Screen Shot from 10-03-2023 of landing page." src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot_1.png">
      <img alt="Screen Shot" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot_2.png">
      <img alt="Screen Shot" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot_3.png">
      <img alt="Screen Shot" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot_4.png">
      <img alt="Screen Shot" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot_5.png">
    </a>
</details>

## 🌐 What is Reactfolio?

Reactfolio is a modern, revamped, and responsive portfolio website built using ReactJS, featuring a fresh UI, and designed specifically for STEM and computer science students, as well as aspiring software engineers and students. This project combines enhanced functionality, significant UI improvements, GitHub API integration, and comprehensive bug fixes to deliver a superior user experience. Fully open-source, Reactfolio encourages community contributions and collaboration. Its intuitive design ensures easy customization, making it convenient for users to personalize their portfolios seamlessly. With Reactfolio, you can showcase your skills, projects, and academic experiences in a streamlined, visually appealing manner.

## 📌 Important Information

This project recycles components from my old [Portfolio-V1](https://github.com/KevinTrinh1227/Trinh), while also adopting a new UI and theme inspired by this [DEMO](https://steam-portfolio-demo.vercel.app/). Project native version: Node v16.20.2, built on Linux OS (Ubuntu 22.04 LTS).

This project is a revamped version of my [Portfolio-V1](https://kevintrinh-v1.netlify.app). It comes with numerous updates including functionality, API integration, Significant UI changes, bug fixes, and much more! This project is fully open source and I encourage anyone interested, to contribute to the project as well. This iteration continues the simplistic approach to the same "one page one scroll" design philosophy as V1.

For easy use, I linked every element that makes up the app to `content.json` to eliminate having to open each component file to change content data, so you can edit everything seamlessly from one file. Refer to the corresponding JS file for more information on how to manipulate a specific section within the JSON.

## 🛠 Installation & setup

1. Clone repository OR download the [latest release](https://github.com/KevinTrinh1227/Reactfolio/releases)

   ```sh
   git clone https://github.com/KevinTrinh1227/Reactfolio
   ```

   ```sh
   cd Reactfolio
   ```

2. OPTIONAL: Use the correct Node version using [NVM](https://github.com/nvm-sh/nvm) (Node v16.20.2)

   ```sh
   nvm install 16
   ```

   ```sh
   nvm alias default 16
   ```

3. Install the dependencies using npm or yarn

   ```sh
   npm install
   ```

   ```sh
   yarn install
   ```

4. Start the development server using npm or yarn

   ```sh
   npm start
   ```

   ```sh
   yarn run start
   ```

## 🚀 Build and run for production

1. Generate a complete static production build

   ```sh
   npm run build
   ```

## 🎨 CSS hex color palette

| Color         | Hex Code                                                             | Usage Info                              | CSS Usage              |
| ------------- | -------------------------------------------------------------------- | --------------------------------------- | ---------------------- |
| Dark Navy     | ![[#0b182c]](https://via.placeholder.com/10/0b182c?text=+) `#0b182c` | Main background color                   | `var(--dark-navy)`     |
| Navy          | ![[#12223d]](https://via.placeholder.com/10/12223d?text=+) `#12223d` | Secondary background color              | `var(--navy)`          |
| Light Navy    | ![[#233450]](https://via.placeholder.com/10/233450?text=+) `#233450` | Data tool tip color & text highlighting | `var(--light-navy)`    |
| Light Lime    | ![[#64ff93]](https://via.placeholder.com/10/64ff93?text=+) `#64ff93` | Main accent color                       | `var(--light-lime)`    |
| White         | ![[#e9f1fc]](https://via.placeholder.com/10/e9f1fc?text=+) `#e9f1fc` | Main text color                         | `var(--white)`         |
| Bone White    | ![[#d4ddf8]](https://via.placeholder.com/10/d4ddf8?text=+) `#d4ddf8` | Secondary text color                    | `var(--bone-white)`    |
| Smoke         | ![[#8992ac]](https://via.placeholder.com/10/8992ac?text=+) `#8992ac` | Tertiary text color                     | `var(--smoke)`         |
| Light Smoke   | ![[#acb5cf]](https://via.placeholder.com/10/acb5cf?text=+) `#acb5cf` | Section subtitles text                  | `var(--light-smoke)`   |
| Lighter Smoke | ![[#d0d8f3]](https://via.placeholder.com/10/d0d8f3?text=+) `#d0d8f3` | Section Title text                      | `var(--lighter-smoke)` |
