/*
 * @Author: XunL
 * @Date: 2021-07-26 23:29:44
 * @LastEditTime: 2021-07-27 03:04:45
 * @Description: file content
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin(
    {
      data(){
        return {
          GRIDSOME_API_URL:process.env.GRIDSOME_API_URL,
          IMAGE_API_PREFIX:process.env.IMAGE_API_PREFIX
        }
      }
    }
  )
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
