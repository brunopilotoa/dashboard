export default function handler(req, res) {

	if 
	const { data, aircraft, litros, inicial, final, categoria, responsavel } =
		req.body;

	res.status(200).json({
		text: 'Hello',
		data: data,
		aircraft,
		litros,
		inicial,
		final,
		categoria,
		responsavel,
	});
	console.log(data, aircraft, litros, inicial, final, categoria, responsavel);
}
