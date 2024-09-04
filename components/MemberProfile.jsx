import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

const MemberProfile = async () => {
  const user = await currentUser();

  const { userId } = auth();

  return (
    <div className="flex items-center gap-3">
      {user.emailAddresses[0].emailAddress}
      <UserButton />
    </div>
  );
};

export default MemberProfile;
