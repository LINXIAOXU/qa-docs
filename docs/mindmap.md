---
sidebar: false
navbar: false
pageClass: mindmap-page
---

<template>
    <svg id="mindmap"></svg>
</template>

<script>
    if (typeof window !== 'undefined') {
        window.global = []
    }
    const d3 = require('d3')
    require('./lib/d3-flextree')
    const markmap = require('./lib/view.mindmap')
    const parse = require('./lib/parse.markdown')
    const transform = require('./lib/transform.headings')
    export default {
        created() {
            if (typeof window === 'undefined') {
                return
            }
            const urlParams = new URLSearchParams(window.location.search)
            d3.text(urlParams.get('md'), function (error, text) {
                if (error) throw error;
                const data = transform(parse(text.replace('<Markmap />', '')))

                markmap('svg#mindmap', data, {
                    preset: 'colorful', // or default
                    linkShape: 'diagonal' // or bracket
                })
            })
        }
    }
</script>

<style lang="stylus">
.mindmap-page
    .content__default, .theme-container, .theme-default-content:not(.custom) > *:first-child 
        position absolute
        top 0
        bottom 0
        right 0
        left 0
    .theme-default-content:not(.custom)
        max-width 100%
        margin 0
        padding 0

    .page-edit
        display none

    .theme-default-content:not(.custom) > *:first-child 
        margin-top 0
    svg#mindmap
        width 100%
        height 100%

    .markmap-node
        cursor pointer

    .markmap-node-circle
        fill #fff
        stroke-width 1.5px

    .markmap-node-text
        fill #000
        font 10px sans-serif

    .markmap-link
        fill none
</style>