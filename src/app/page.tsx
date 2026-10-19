import { HouseViewer } from '../components/viewer/HouseViewer';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../auth/options';
import { isAllowedEmail } from '../auth/access';

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!isAllowedEmail(session?.user?.email)) redirect('/api/auth/signin?callbackUrl=%2F');
  return <HouseViewer />;
}
