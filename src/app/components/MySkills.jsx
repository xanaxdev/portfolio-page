export default function MySkills() {
    return (
        <div className="container py-10 mx-auto">
                <h1 className="text-6xl">
                    {'{'}
                    <span className="text-[35px] font-desc px-5">My skills</span>
                    {'}'}
                </h1>

                <div className="py-10">
                    {/* Skill 1 */}
                    <div className="flex items-center justify-between py-4">
                        {/* Left: Skill level with gradient */}
                        <div className="text-center">
                            <h1 className="lg:text-9xl font-extrabold bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                85%
                            </h1>
                        </div>


                        {/* Right: Skill name and description */}
                        <div className="pl-5 text-left w-3/5">
                            <h2 className="text-4xl font-bold text-purple-600">ReactJS</h2>
                            <p className="font-desc text-4xl">Advanced knowledge of React and its ecosystem, including hooks, state management, and component architecture.</p>
                        </div>
                    </div>


                    {/* Skill 2 */}
                    <div className="flex items-center justify-between mt-20">
                        {/* Left: Skill level with gradient */}
                        <div className="text-center">
                            <h1 className="lg:text-9xl font-extrabold bg-gradient-to-r from-gray-500 via-gray-400 to-zinc-700 bg-clip-text text-transparent">
                                80%
                            </h1>
                        </div>


                        {/* Right: Skill name and description */}
                        <div className="pl-5 text-left w-3/5">
                            <h2 className="text-4xl font-bold text-gray-500">NextJS</h2>
                            <p className="font-desc text-4xl">Advanced knowledge of React and its ecosystem, including hooks, state management, and component architecture.</p>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-between mt-20">
                        {/* Left: Skill level with gradient */}
                        <div className="text-center">
                            <h1 className="lg:text-9xl font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                                50%
                            </h1>
                        </div>


                        {/* Right: Skill name and description */}
                        <div className="pl-5 text-left w-3/5">
                            <h2 className="text-4xl font-bold text-red-400">NestJS</h2>
                            <p className="font-desc text-4xl">Advanced knowledge of React and its ecosystem, including hooks, state management, and component architecture.</p>
                        </div>
                    </div>

                    {/* Skill 4 */}
                    <div className="flex items-center justify-between mt-20">
                        {/* Left: Skill level with gradient */}
                        <div className="text-center">
                            <h1 className="lg:text-9xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                                70%
                            </h1>
                        </div>


                        {/* Right: Skill name and description */}
                        <div className="pl-5 text-left w-3/5">
                            <h2 className="text-4xl font-bold text-teal-400">TypeScript</h2>
                            <p className="font-desc text-4xl">Advanced knowledge of React and its ecosystem, including hooks, state management, and component architecture.</p>
                        </div>
                    </div>

                    {/* Skill 5 */}
                    <div className="flex items-center justify-between mt-20">
                        {/* Left: Skill level with gradient */}
                        <div className="text-center">
                            <h1 className="lg:text-9xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                80%
                            </h1>
                        </div>


                        {/* Right: Skill name and description */}
                        <div className="pl-5 text-left w-3/5">
                            <h2 className="text-4xl font-bold text-yellow-400">Google & Facebook Ads</h2>
                            <p className="font-desc text-4xl">Advanced knowledge of React and its ecosystem, including hooks, state management, and component architecture.</p>
                        </div>
                    </div>

                </div>

            </div>
    );
}