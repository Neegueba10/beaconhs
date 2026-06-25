import { EmailLogListView } from '@/components/email-log/list-view'

export const metadata = { title: 'Email log' }
export const dynamic = 'force-dynamic'

export default async function EmailLogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  return (
    <EmailLogListView
      searchParams={sp}
      scope="tenant"
      basePath="/admin/email-log"
      back={{ href: '/admin', label: 'Back to admin' }}
    />
  )
}
