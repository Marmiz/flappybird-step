import React, { Component, Suspense, lazy } from 'react';


class Break extends Component {
    state = {
        nav: 16,
    }

    nextPage = () => {
        this.setState((state) => ({nav: state.nav + 1}))
    }


    render() {
        const X = lazy(() => import(`./day/day${this.state.nav}`));
        return(
        <div>
            <nav><button onClick={this.nextPage} className="nes-btn">Next</button> Day{this.state.nav}</nav>
            <Suspense fallback="loading..">
                <X />
            </Suspense>
        </div>
        )
}
}

export default Break;
