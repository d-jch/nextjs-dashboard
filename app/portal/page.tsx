import Link from 'next/link';
import { Noto_Sans_SC } from 'next/font/google';
import { lusitana } from '@/app/ui/fonts';

const notoSansSC = Noto_Sans_SC({ weight: '400', subsets: ['latin'] });

const sampleStatuses = [
  { label: '已接收', description: '等待安排检测' },
  { label: '检测中', description: '实验室正在处理' },
  { label: '待补充信息', description: '需要你采取行动' },
  { label: '已交付', description: '结果和报告已就绪' },
];

export default function Page() {
  return (
    <main lang="zh-CN" className={notoSansSC.className}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl">
            用户门户
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            查看样品进度、处理待办事项和获取检测结果。
          </p>
        </div>
        <Link
          href="/portal/samples/new"
          className="flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          提交样品
        </Link>
      </div>

      <section aria-label="样品进度概览">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sampleStatuses.map((status) => (
            <article
              key={status.label}
              className="rounded-xl bg-gray-50 p-4 shadow-sm"
            >
              <h2 className="text-sm font-medium text-gray-700">
                {status.label}
              </h2>
              <p className={`${lusitana.className} mt-3 text-3xl text-gray-900`}>
                —
              </p>
              <p className="mt-2 text-xs text-gray-500">
                {status.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500">
          样品数据接入后，这里会显示各状态的数量。
        </p>
      </section>

      <section
        aria-labelledby="recent-samples-heading"
        className="mt-8 rounded-xl bg-gray-50 p-4 shadow-sm sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id="recent-samples-heading"
            className="text-xl"
          >
            最近的样品
          </h2>
          <Link
            href="/portal/samples"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            查看全部
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 text-gray-500">
              <tr>
                <th scope="col" className="px-3 py-3 font-medium">
                  样品编号
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  样品名称
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  状态
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  最近更新
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-10 text-center text-gray-500"
                >
                  暂无样品记录。提交样品后，进度会显示在这里。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}