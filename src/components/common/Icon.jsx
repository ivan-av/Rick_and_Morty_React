const Icon = ({ className = '', stylesToAdd = {}, withSpace = false }) => {
  return (
    <i
      className={className}
      style={{
        paddingRight: withSpace ? '0.5rem' : '0',
        ...stylesToAdd
      }}
    />
  )
}

export default Icon
