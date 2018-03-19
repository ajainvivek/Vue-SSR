const { JSDOM } = require("JSDOM")
const fs = require("fs")
const { upperFirst } = require("lodash")
const mkdirp = require("mkdirp")

const vueFormatter = require("./../helpers/vueFormatter")
const lookup = require("./../../schema/lookup.json")

const constructTemplate = function(dom, template, root) {
	let element = JSDOM.fragment(`<${lookup[template.type]}></${lookup[template.type]}>`)

	// Add attributes to the element, if it exists
	if (template.properties) {
		const properties = Object.keys(template.properties)
		for (let i = 0; i < properties.length; i++) {
			element.firstChild.setAttribute([properties[i]], template.properties[properties[i]])
		}
	}
	// Add inner html, if content exist
	if (template.content) {
		element.firstChild.innerHTML = template.content
	}
	// Append children, if they exist
	if (template.children) {
		for (let i = 0; i < template.children.length; i++) {
			const children = constructTemplate(dom, template.children[i])
			element.firstChild.appendChild(children.firstChild)
		}
	}
	// if root element then wrap the template
	if (root) {
		return `<template>${element.firstChild.outerHTML}</template>`
	}

	return element
}

const constructScript = function(view, meta) {
	return `
        <script>
            export default {
				name: "${view}",
                meta() {
					return {
						title: "${meta.title}",
						description: "${meta.description}"
					}
				}				
            }
        </script>
    `
}

const constructStyle = function(view, style) {
	if (style) {
		return `
			<style lang="scss" scoped>
				.${view} {
					${style}
				}
			</style>	
		`
	} else {
		return ""
	}
}

module.exports = function() {
	const dom = new JSDOM()
	const themesFolder = "./themes"
	fs.readdir(themesFolder, (err, files) => {
		files.forEach((dir) => {
			mkdirp(`client/views/${dir}`, (err) => {
				if (err) console.error(err)
				else console.log(`created theme directory ${dir}`)
			})
			fs.readdir(`${themesFolder}/${dir}`, (err, files) => {
				files.forEach((file) => {
					file = upperFirst(file.replace(/\.[^/.]+$/, ""))
					const theme = require(`./../../themes/${dir}/${file}`)
					const filepath = `client/views/${dir}/${file}.vue`
					let fileContent = ""
					const template = constructTemplate(dom, theme, true)
					const script = constructScript(file, theme.meta || {})
					const style = constructStyle(file, theme.style || "")
					fileContent += template
					fileContent += style
					fileContent += script
					fileContent = vueFormatter(fileContent)
					fs.writeFile(filepath, fileContent, (err) => {
						if (err) throw err
						console.log("The file was succesfully saved!")
					})
				})
			})
		})
	})
}
