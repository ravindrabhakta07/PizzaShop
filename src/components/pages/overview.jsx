Overview = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".overview-page").addClass("ng-enter");
			setTimeout(function(){
				$(".overview-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".overview-page").removeClass("ng-enter");
				$(".overview-page").removeClass("ng-enter-active");
			}, 600);
		}
	},

	render: function() {
	    return (
			<div className="overview">
				<div className="overview-page ui-view main" key="overview">
			        <a href="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</a>
			        <h2>Overview <small>Why is Laziz Pizza is so awesome?</small></h2>
			        <div className="jumbotron">
						<h1>Welcome!</h1> Try any of the lazziz pizza made by professional cook Taral Patel and find out why Laziz is so awesome.
						<br /><br />
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p>
			        </div>
			    </div>
			</div>
		);
	}
});
