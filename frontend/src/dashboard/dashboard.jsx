import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}