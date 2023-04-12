export const Demo = () => {
	return <>
		<div className="container p-3">
			<h2 className="my-5 theme-text-mainbrand">Jak działa Termino</h2>
			<video width="75%" height="75%" controls>
				<source src="TerminoDemo.mp4" type="video/mp4"/>
					<source src="movie.ogg" type="video/ogg"/>
						Your browser does not support the video tag.
			</video>
		</div>
	</>
}