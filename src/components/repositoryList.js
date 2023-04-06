import React from "react";
import { useGitReposQuery } from "../features/githubUser/gitRepo/gitRepo";
import RepoCard from "./repoCard";

function RepositoryList({ value }) {
  const {
    data: repositories,
    isLoading,
    isError,
  } = useGitReposQuery(value ? value : "tahirahmad01");
  // console.log(repositories);
  return (
    <div>
      <h1 className="text-lg mb-2 font-medium text-gray-800">Repositories</h1>
      {isLoading ? <div className="text-center">Loading...</div> : null}
      {!isLoading && isError ? (
        <div className="text-center">Something went wrong</div>
      ) : null}
      {!isLoading && repositories?.length === 0 && (
        <div className="text-center mt-5">No repositories found</div>
      )}
      
      {!isLoading && repositories?.length > 0 ? (
        <div>
          {repositories.map((repo, idx) => {
            const {
              name,
              description,
              homepage,
              html_url,
              language,
              stargazers_count,
            } = repo || {};
            return (
              <div key={idx}>
                <RepoCard
                  name={name}
                  description={description}
                  live={homepage}
                  gitUrl={html_url}
                  language={language}
                  star={stargazers_count}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default RepositoryList;
