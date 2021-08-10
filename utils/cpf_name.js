const { generate, validate} = require('gerador-validador-cpf')

const cpfName = () => {
	var cpf = generate ({format: true})
	var cpfAndName = cpf + ' - Laryssa Biroli'
	return cpfAndName
}

exports.cpfName = cpfName