# DogUI-ISU-CSSA-React

dogui isu cssa react :D 

## Usage

```jsx
tabs = [
        { route: "", redirect: "index" },
        { tab: "INDEX", route: "index", component: () => <h2>Some News</h2> },
        { tab: "JOB OPENINGS", route: "jobs", component: Opportunities },
        { route: "admin", component: Admin },
        { route: "*", component: E404 }
    ]
    navs = [
        { nav: "isucssa.org", type: "func", click: () => { window.location.href = "http://isucssa.org" } },
        { nav: "Index", type: "route", click: "index" }
    ]
    source = { name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" };
    info = {
        sub: "Chinese Students & Scholars Association",
        department: "department of career development",
        email: "cssa.isu.ia@gmail.com",
        address: "2229 Lincoln Way C4 1530 Student Office",
        address2: "Memorial Union Ames, IA 50011-1130",
        wechat: "http://www.isucssa.org/24494204493902938754.html",
        weibo: "http://weibo.com/isucssa",
        facebook: "https://www.facebook.com/iaisucssa",
        instagram: "https://www.instagram.com/isucssa/"
    };

    render() {
        return (
            <DCY
                tabs={this.tabs}
                navs={this.navs}
                source={this.source}
                info={this.info}
                pre={this.props.pre}
            />
        );
    }
```

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
