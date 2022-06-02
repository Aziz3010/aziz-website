import React from 'react';
import Styles from './Project.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Project = ({ data }) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className={Styles.project}>
                <div className={Styles.top_box}>
                    <div className={Styles.spans}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={Styles.site_title}>{data.project_name}</p>
                    <div className={Styles.link}>
                        <a target="_blank" rel="noreferrer" href={data.live_link}>
                            <RemoveRedEyeIcon />
                            Live
                        </a>
                    </div>
                </div>
                <div className={Styles.web_pic}>
                    <img src={data.pic} alt={data.name} />
                </div>
            </div>
        </div>
    )
}

export default Project;