import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from './layout/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
    
    useEffect(()   => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading || logs === null ) {
        return <PreLoader />;
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header"> 
            <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
            <p className="center">No logs to show...</p>
        )  :  (
        logs.map(log => <LogItem log={log} key={log.id}/>)
        )}
        </ul>
    );
};

logs.PropTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    logs: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
