import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import { Input, IconButton, Tooltip } from 'react-toolbox'
import Slider from 'rc-slider'
import styles from './filters.style'


const TooltipButton = new Tooltip(IconButton)
class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = { name: props.filters.name, RAC: props.filters.RAC }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeRAC = this.handleChangeRAC.bind(this)
  }

  handleChangeName(value) {
    this.setState({ name: value })
    this.props.applyFiltersName(value)
  }

  handleChangeRAC(value) {
    this.setState({ RAC: value })
    this.props.applyFiltersRAC(value)
  }


  render() {
    const {
      activeFilters,
      toggleFilters,
    } = this.props

    const marks = {
      0: <strong>0 €</strong>,
      30: {
        style: {
          color: 'green',
        },
        label: <strong>30 €</strong>,
      },
      100: {
        style: {
          color: 'red',
        },
        label: <strong>100 €</strong>,
      },
    }

    return (
      <div className={styles.all}>
        <TooltipButton
          className={styles.filtersButton}
          icon="filter_list"
          tooltip="Filtrer"
          tooltipDelay={500}
          onClick={() => toggleFilters()} />
        <div className={!activeFilters ? styles.filtersHidden : styles.filters}>
          <Input
            type="text"
            label="Nom"
            value={this.state.name}
            onChange={value => this.handleChangeName(value)}
          />
          <div>
            <p>Reste à charge</p>
            <Slider
              className={styles.slider}
              range
              step={5}
              marks={marks}
              min={0}
              max={100}
              allowCross={false}
              defaultValue={this.state.RAC}
              onAfterChange={value => this.handleChangeRAC(value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  filters: PropTypes.object,
  activeFilters: PropTypes.bool,
  toggleFilters: PropTypes.func,
  applyFiltersName: PropTypes.func,
  applyFiltersRAC: PropTypes.func,
}

export default loader(Filters, {
  wait: false,
})
