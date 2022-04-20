export default function Wishlist () {
  const title = useSelector(state => state.title) 

  return(
    <div>{title}</div>
  )
}
