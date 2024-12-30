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
export const fetchCache = "force-no-store";
export default async function Index() {
  // ───-- Global Variable ────────────────────────────────────────────────────────────
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
      <section>
        {posts?.map((item: postType) => (
          <section key={item?.id}>
            <section>{item?.id}</section>
            <section>{item?.name}</section>
            <section>{item?.createdAt}</section>
          </section>
        ))}
      </section>
    </>
  );
}
