'use strict';var assert=require('assert');function HtmlWebpackProcessingPlugin(options){assert.equal(options,undefined,'The HtmlWebpackProcessingPlugin does not accept any options')}HtmlWebpackProcessingPlugin.prototype.apply=function(compiler){var self=this;compiler.plugin('compilation',(function(compilation){compilation.plugin('html-webpack-plugin-before-html-processing',(function(htmlPluginData,callback){self.preProcessing(htmlPluginData,callback)}))}));compiler.plugin('compilation',(function(compilation){compilation.plugin('html-webpack-plugin-after-html-processing',(function(htmlPluginData,callback){self.postProcessing(htmlPluginData,callback)}))}))};HtmlWebpackProcessingPlugin.prototype.preProcessing=function(htmlPluginData,callback){if(typeof htmlPluginData.plugin.options.preProcessing==='function'){try{htmlPluginData.html=htmlPluginData.plugin.options.preProcessing(htmlPluginData.html);callback(null,htmlPluginData)}catch(err){callback(err)}}else{callback(null,htmlPluginData)}};HtmlWebpackProcessingPlugin.prototype.postProcessing=function(htmlPluginData,callback){if(typeof htmlPluginData.plugin.options.postProcessing==='function'){try{htmlPluginData.html=htmlPluginData.plugin.options.postProcessing(htmlPluginData.html);callback(null,htmlPluginData)}catch(err){callback(err)}}else{callback(null,htmlPluginData)}};module.exports=HtmlWebpackProcessingPlugin;