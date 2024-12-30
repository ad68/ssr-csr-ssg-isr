import { getPosts } from "./page.server";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
type postType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};
export const revalidate = 0;
export default async function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const posts: postType[] = await getPosts();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <ul>
        {posts?.map((item: postType) => (
          <>
            <li key={item.id}>{item?.id}</li>
            <li>{item?.name}</li>
            <li>{item?.createdAt}</li>
          </>
        ))}
      </ul>
    </>
  );
}
