/* eslint-disable no-one-time-vars/no-one-time-vars */
/* eslint-disable no-undefined */
/* eslint-disable no-var */
/* eslint-disable unicorn/consistent-destructuring */
/* eslint-disable one-var */

const enum Assets {
	Logo = "https://i.imgur.com/oZ0QH0l.png",
	Book = "https://i.imgur.com/bfiGDsC.png",
	NotifBell = "https://i.imgur.com/jB2kXoMh.png"
}

const presence = new Presence({
	clientId: "1148239059836223551",
}),
browsingTimestamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			details: "Browsing Manga Index",
			largeImageKey: Assets.Logo,
			startTimestamp: browsingTimestamp,
			smallImageKey: Assets.Book,
		},

	{pathname} = document.location;
		const lien = document.location.href;
		var parts = lien.split("?");
		var varcheck = parts[1] !== null && parts[1] !== undefined;
	if (pathname.startsWith("/manga_list")) {
		var mangas = document.querySelector("[name='limit']");
		if(mangas !== null) {
			var valeurdefined = `Page ${mangas.getAttribute("value")} / ${mangas.getAttribute("max")}`;
			presenceData.state = valeurdefined;
		} else {
			var valeurundefined = "Page 1 / 1";
			presenceData.state = valeurundefined;
		}
		presenceData.details = "Browsing All Mangas";
		presenceData.buttons = [{label: "Mangas List", url: document.URL}];
		presenceData.smallImageKey = Assets.Search;

		if(varcheck && parts[1].startsWith("order_by=create")) {
			presenceData.details = "Browsing Latest Mangas";
			presenceData.buttons = [{label: "Latest Mangas", url: document.URL}];
			if (parts[1].startsWith("limit=")) {
				if(mangas !== null) {
					valeurdefined = `Page : ${mangas.getAttribute("value")} / ${mangas.getAttribute("max")}`;
					presenceData.state = valeurdefined;
				} else {
					valeurundefined = "Page 1 / 1";
					presenceData.state = valeurundefined;
				}
			}

		} else if (varcheck && parts[1].startsWith("order_by=top")) {
			presenceData.details = "Browsing Hottest Mangas";
			presenceData.buttons = [{label: "Hottest Mangas", url: document.URL}];
			if (parts[1].startsWith("limit=")) {
				if(mangas !== null) {
					valeurdefined = `Page : ${mangas.getAttribute("value")} / ${mangas.getAttribute("max")}`;
					presenceData.state = valeurdefined;
				} else {
					valeurundefined = "Page 1 / 1";
					presenceData.state = valeurundefined;
				}
			}
		} else if (varcheck && parts[1].startsWith("order=")) {
			parts = parts[1].split("&");
			varcheck = parts[1] !== null && parts[1] !== undefined;
			if(varcheck && parts[1].startsWith("order_by=create")) {
				presenceData.details = "Browsing Latest Mangas";
				presenceData.buttons = [{label: "Latest Mangas", url: document.URL}];

			} else if (varcheck && parts[1].startsWith("order_by=top")) {
				presenceData.details = "Browsing Hottest Mangas";
				presenceData.buttons = [{label: "Hottest Mangas", url: document.URL}];
			}
		} else if (varcheck && parts[1].startsWith("search=")) {
			parts = parts[1].split("=");
			presenceData.details = `Searching Mangas : ${parts[1].replaceAll("%20", " ")}`;
			presenceData.buttons = null;
		}
	} else if (pathname.startsWith("/manga_last")) {
			presenceData.details = "Browsing Updated Mangas";
			presenceData.buttons = [{label: "Updated Mangas", url: document.URL}];

	} else if (pathname.startsWith("/bentolist")) {
		var limit = document.querySelector("[id='onglet-']").querySelector("[name='limit']");
		if(limit !== null) {
			valeurdefined = `Page ${limit.getAttribute("value")} / ${limit.getAttribute("max")}`;
			presenceData.state = valeurdefined;
		} else {
			valeurundefined = "Page 1 / 1";
			presenceData.state = valeurundefined;
		}
		const userlist = document.querySelector("#container-bentolist > div.profil_top.profil_top-light > div.user_pseudo");
		presenceData.details = `Viewing ${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`;
		presenceData.buttons = [{label: `${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`, url: document.URL}];
		presenceData.smallImageKey = Assets.Viewing;

		if(pathname.includes("/en-cours")) {
			limit = document.querySelector("[id='onglet-en-cours']").querySelector("[name='limit']");
			if(limit !== null) {
				valeurdefined = `Page ${limit.getAttribute("value")} / ${limit.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				valeurundefined = "Page 1 / 1";
				presenceData.state = valeurundefined;
			}
			presenceData.details = "Viewing Reading Mangas List";
			presenceData.buttons = [{label: `${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`, url: document.URL}];

		} else if(pathname.includes("/pause")) {
			limit = document.querySelector("[id='onglet-pause']").querySelector("[name='limit']");
			if(limit !== null) {
				valeurdefined = `Page ${limit.getAttribute("value")} / ${limit.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				valeurundefined = "Page 1 / 1";
				presenceData.state = valeurundefined;
			}
			presenceData.details = "Viewing Paused Mangas List";
			presenceData.buttons = [{label: `${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`, url: document.URL}];


		} else if(pathname.includes("/a-lire")) {
			limit = document.querySelector("[id='onglet-a-lire']").querySelector("[name='limit']");
			if(limit !== null) {
				valeurdefined = `Page ${limit.getAttribute("value")} / ${limit.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				valeurundefined = "Page 1 / 1";
				presenceData.state = valeurundefined;
			}
			presenceData.details = "Viewing Pending Mangas List";
			presenceData.buttons = [{label: `${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`, url: document.URL}];

		} else if(pathname.includes("/fini")) {
			limit = document.querySelector("[id='onglet-fini']").querySelector("[name='limit']");
			if(limit !== null) {
				valeurdefined = `Page ${limit.getAttribute("value")} / ${limit.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				valeurundefined = "Page 1 / 1";
				presenceData.state = valeurundefined;
			}
			presenceData.details = "Viewing Finished Mangas List";
			presenceData.buttons = [{label: `${userlist.textContent.substring(userlist.textContent.lastIndexOf("-") + 2)} BentoList`, url: document.URL}];
		}

	} else if (pathname.startsWith("/user")) {
		const user = document.querySelector("#container_user_show > div.user-top.component-profil > div.profil_top > div.user_titles.profil_top-titles > h1").textContent;
		presenceData.details = `Viewing ${user.substring(user.lastIndexOf("-"))} Profile`;
		presenceData.buttons = [{label: `${user.substring(user.lastIndexOf("-"))} Profile`, url: document.URL}];
		presenceData.smallImageKey = Assets.Viewing;

	} else if (pathname.startsWith("/manga")) {
		if(pathname.includes("chapter") === false) {
			const chapter = document.querySelector("[class='chapter_volume mr-5']").textContent;
			const totalchapter = chapter.substring(chapter.lastIndexOf(" ") + 1);
			const limit = document.querySelector("[name='limit']");
			const chapval = localStorage.getItem("firstvaleur");
			if(chapval === null) localStorage.setItem("firstvaleur", totalchapter);
			if(limit !== null) {
				const valeurdefined = `Chapter: ${chapval} | Page ${limit.getAttribute("value")}/${limit.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				const valeurundefined = `Chapter: ${chapval} |Page 1 / 1`;
				presenceData.state = valeurundefined;
			}
		presenceData.details = `Viewing: ${document.title.substring(0,document.title.lastIndexOf("|") - 1)}`;
		presenceData.buttons = [{ label: "View Manga", url: document.URL }];
		presenceData.smallImageKey = Assets.Viewing;

		} else if (pathname.includes("chapter") === true) {
			parts = lien.split("chapter");
			const chapter = document.querySelector("option").textContent;
			const currentpages = document.querySelector("[class='current-page']").textContent;
			const totalpages = document.querySelector("[class='total-pages']").textContent;
			presenceData.details = `Reading: ${document.title.substring(0,document.title.lastIndexOf("-") - 1)}`;
			presenceData.state = `Chapter ${pathname.substring(pathname.lastIndexOf("/") + 1)} / ${chapter.match(/\d+/)[0]} | Page ${currentpages} / ${totalpages}`;
			presenceData.smallImageKey = Assets.Reading;
			presenceData.buttons = [{label: "Read Chapter", url: document.URL}, {label: "View Manga", url: parts[0]}];
		}

	} else if (pathname.startsWith("/notifications")) {
		presenceData.details = "Viewing Notifications Pages";
		presenceData.state = `${document.querySelector("#badge-notifs").textContent} Notifications`;
		presenceData.buttons = null;
		presenceData.smallImageKey = Assets.NotifBell;

	} else if (pathname.startsWith("/teams")) {
		const teams = document.querySelector("[name='limit']");
			if(teams !== null) {
				valeurdefined = `Page ${teams.getAttribute("value")} / ${teams.getAttribute("max")}`;
				presenceData.state = valeurdefined;
			} else {
				valeurundefined = "Page 1 / 1";
				presenceData.state = valeurundefined;
			}
		presenceData.details = "Viewing Teams Pages";
		presenceData.buttons = [{label: "View Teams", url: document.URL}];
		presenceData.smallImageKey = Assets.Search;
	}
	presence.setActivity(presenceData);
});
window.addEventListener("beforeunload", function() {
	localStorage.removeItem("firstvaleur");
});