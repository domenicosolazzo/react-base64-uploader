var Base64Uploader = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
	},
	handleChange: function(e){
		var self = this;
		var file = e.target.files[0];
		
		self.setState({filename:file.name});
		self.setState({size:file.size});
		self.setState({type:file.type});
		
		var reader = new FileReader();
		reader.onload = function(upload){
			console.log("The file has been read...");
			self.setState({data_uri: upload.target.result});
			console.log("DATA_URI", self.state.data_uri);
		};
		reader.readAsDataURL(file);
	},
	getInitialState: function(){
		return {
			data_uri: null,
			filename: null,
			size: null,
			type:null
		};
	},

	render: function(){
		return (
			<section>
				<form encType="multipart-formdata" onSubmit={this.handleSubmit}>
					<input type="file" onChange={this.handleChange}/>
				</form>
				<br />
				<section>
					<header>File Info</header>
					<p>{this.state.filename}</p>
					<p>{this.state.size}</p>
					<p>{this.state.type}</p>
					<p>{this.state.data_uri}</p>
				</section>
			</section>
		);
	}
});

React.render(
	<Base64Uploader />,
	document.getElementById('content')
);