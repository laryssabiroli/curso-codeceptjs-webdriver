module.exports = {
	bootstrap: async function(){
		console.log('Isso executou ANTES do projeto todo')
	},
	teardown: async function(){
		console.log('Isso executou DEPOIS do projeto todo')
	}
}