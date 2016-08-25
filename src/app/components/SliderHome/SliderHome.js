import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import HeroContent from '../HeroContent/HeroContent';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IoSocialFacebook from 'react-icons/lib/io/social-facebook';

class SliderHome extends Component {

	static propTypes = {
		loading: PropTypes.bool,
		error: PropTypes.string,
		dispatch: PropTypes.func,
		user: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {name: '', submitDisabled: true, required: ''}
	}

	handleImageLoad(event) {
		console.log('Image loaded ', event.target);
	}

	handlePlay() {
		this._imageGallery.play();
	}

	handlePause() {
		this._imageGallery.pause();
	}

	submit = () => {
		const { dispatch, user } = this.props;
		const lead = {
			name: this.refs.name.getValue(),
			email: this.refs.email.getValue(),
			city: this.state.city,
			guide:true
		};
		dispatch(userActions.saveLead(lead, this.props.submitSuccess, this.props.submitFail));
	};

	render() {

		const styles = require('./SliderHome.scss');

		const   settings = {
			className: 'center',
			lazyLoad: false,
			arrows: false,
			draggable: false,
			swipeToSlide: false,
			speed: 2000,
			autoplay: true,
			autoplaySpeed: 6000,
			infinite: true,
			variableWidth: false,
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true
		};

		let coverStyle = (img) => {
			return {
				backgroundImage: 'url(' + img + ')',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#F071B2C',
				textAlign: 'center',
				height: '90vh'
			};
		};

		let coverFullStyle = (img) => {
			return {
				backgroundImage: 'url(' + img + ')',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#F071B2C',
				textAlign: 'center',
				height: '100vh'
			};
		};

		const styleForm = {
			position: 'absolute',
			background: 'white',
			marginTop: '100px',
			marginLeft: '35%',
			height: '450px',
			width: '30%'
		}

		if (this.props.img) {
			return (
				<div>
					<div style={coverFullStyle(this.props.img)}>
						<div className={styles.SliderHome}>
							<div className={styles.wraperForm}>
								<div className={ styles.styleForm }>
									<p style={{margin:'10px'}} style={ {fontSize:'17px'} }>
										Produzimos um <b>Guia Digital </b>
										com conteúdo <b>exclusivo </b>
										que vai te ajudar a descobrir
										uma nova maneira de viajar.
										Preencha os dados abaixo e receba o seu :-)
									</p>
									<TextField
										hintText="Digite o seu nome"
										floatingLabelText="Nome"
										fullWidth={ true }
										ref="name"
										onChange={() => {
										                const validName = this.refs.name.getValue();
										                if (validName == '') {
										                  this.setState({required: 'Falta o seu nome!'})
										                  this.setState({submitDisabled: true})
										                } else {
										                console.log("email:  " , this.refs.email.getValue());
										                  this.setState({required: ''})
										                  if(this.refs.email.getValue() != ''){
										                    this.setState({submitDisabled: false})
										                  }
										                }
										              }
							    }/>
									<TextField
										ref="email"
										hintText="Digite o seu e-mail"
										fullWidth={ true }
										floatingLabelText="E-mail"
										onChange={() => {
										                const val = this.refs.email.getValue();
										                if ((!val.match(/.+@.+/)) || val == '') {
										                  this.setState({error: 'Email inválido'})
										                  this.setState({submitDisabled: true})
										                } else {
										                  console.log("name validation:" , this.refs.name.getValue());
										                  this.setState({error: ''})
										                  if(this.refs.name.getValue() != ''){
										                    this.setState({submitDisabled: false})
										                  }
										                }
										              }
								}/>
									<p style={{color:'red'}}>{ this.state.required }</p>
									<p/>
									<p style={{color:'red'}}>{ this.state.error }</p>
									<br/>
									<RaisedButton
										label="Quero receber meu guia"
										fullWidth={true}
										primary={ true }
										onTouchTap={ this.submit }
										disabled={this.state.submitDisabled}
										/>
									<br/>
									<br/>
									<RaisedButton
										style={{paddingBottom:'20px'}}
										label="Compartilhar"
										href="http://www.insidr.city/guia-digital"
										backgroundColor="#3b5998"
										labelColor="#fff"
										style={styles.button}
										icon={<IoSocialFacebook />}
										/>
									<br/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div style={{height: '90vh' }} className={styles.SliderHome}>
					<div className={styles.sliderContainer}>
						<Slider {...settings}>
							<div><h3>1</h3></div>
							<div><h3>2</h3></div>
							<div><h3>3</h3></div>
							<div><h3>4</h3></div>
							<div><h3>5</h3></div>
							<div><h3>6</h3></div>
						</Slider>
					</div>
					<HeroContent title={ this.props.title } subtitle={ this.props.subtitle }
					             buttonTitle={ this.props.buttonTitle } href={ this.props.href }
					             buttonIcon={ this.props.buttonIcon }/>
				</div>
			)
		}
	}
}

export default SliderHome;