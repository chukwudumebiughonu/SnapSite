import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation'

import { getAuthUserDetails } from '@/lib/queries'
const Page = async () => {
  const authUser = await currentUser()
  if (!authUser) return redirect('/sign-in')

  const user = await getAuthUserDetails()
  return (
    <div>Agency</div>
  )
}

export default Page