/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import BasicTooltip from '../../tooltip/BasicTooltip'

const ChordArcTooltip = ({ arc, theme }) =>
    <BasicTooltip id={arc.id} value={arc.value} color={arc.color} enableChip={true} theme={theme} />

ChordArcTooltip.propTypes = {
    arc: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default pure(ChordArcTooltip)
