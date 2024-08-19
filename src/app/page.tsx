import Image from 'next/image';

export default function Page() {
	return (
		<>
			<p className="text-5xl mb-10 m-auto uppercase font-bold">
				Pagina Inicial
			</p>
			<div className="m-auto">
				<Image src={'/logo.png'} alt={''} width={300} height={300} />
			</div>

			<p className="text-2xl mt-5 text-yellow-500 font-bold uppercase">
				Realize Seu Cadastro Para Acessar as Paginas Restritas
			</p>
		</>
	);
}
