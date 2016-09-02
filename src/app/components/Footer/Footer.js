import React, {Component} from 'react';
import Title from '../Title/Title'
class Footer extends Component {
  render() {
  	const styles = require('./Footer.scss');
    return (
      <div className='footer'>
            {/*TODO:O footer não deve ser fixo, ele deve se ajustar ao conteudo com alguma margem de padding*/}
          	{/*TODO:Deve ser um titulo com props: fonte-size, padding acima e abaixo, padding lados*/}
            {/*TODO:Deve ter uma opção de centralizar dentro da div*/}
 		        <Title/>
    </div>
    );
  }
}
export default Footer;
