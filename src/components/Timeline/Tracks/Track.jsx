import React, { PropTypes } from 'react'
import Tracks from './'
import Element from './Element'

const Track = ({ time, elements, isOpen, tracks, style }) =>
  <div className="track">
    <div className="track__elements">
      { elements.map(element => <Element trackStyle={style} time={time} {...element} />) }
    </div>
    { isOpen && tracks && tracks.length > 0
      && <Tracks time={time} tracks={tracks} />
    }
  </div>

Track.propTypes = {
  time: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  style: PropTypes.shape({})
}

export default Track