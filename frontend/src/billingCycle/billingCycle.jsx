import React from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

export default class BillingCycle extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader
                    title='Ciclos de Pagamentos'
                    small='Cadastro' />
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        )
    }
}