const page = ({params}: {params: { agencyId: string}}) => {
  return (
    <div>{params.agencyId}</div>
  )
}

export default page