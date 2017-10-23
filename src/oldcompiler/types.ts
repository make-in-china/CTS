namespace ts {
    /**
     * Type of objects whose values are all of the same type.
     * The `in` and `for-in` operators can *not* be safely used,
     * since `Object.prototype` may be modified by outside code.
     */
    export interface MapLike<T> {
        [index: string]: T;
    }

    /** ES6 Map interface. */
    export interface Map<T> {
        get(key: string): T | undefined;
        has(key: string): boolean;
        set(key: string, value: T): this;
        delete(key: string): boolean;
        clear(): void;
        forEach(action: (value: T, key: string) => void): void;
        readonly size: number;
        keys(): Iterator<string>;
        values(): Iterator<T>;
        entries(): Iterator<[string, T]>;
    }

    /** ES6 Iterator type. */
    export interface Iterator<T> {
        next(): { value: T, done: false } | { value: never, done: true };
    }

    // branded string type used to store absolute, normalized and canonicalized paths
    // arbitrary file name can be converted to Path via toPath function
    export type Path = string & { __pathBrand: any };

    export interface TextRange {
        pos: number;
        end: number;
    }

    // token > SyntaxKind.Identifer => token is a keyword
    // Also, If you add a new SyntaxKind be sure to keep the `Markers` section at the bottom in sync
    export const enum SyntaxKind { /** 未知的令牌 */
        Unknown,
        /** 文件结束令牌 */
        EndOfFileToken,
        /** 单行注释琐事  */
        SingleLineCommentTrivia,
        /** 多行注释琐事 */
        MultiLineCommentTrivia,
        /** 新行琐事 */
        NewLineTrivia,
        /** 空白琐事 */
        WhitespaceTrivia,
        // We detect and preserve #! on the first line
        /** 工作琐事 我们发现和保存#！在第一行 */
        ShebangTrivia,
        // We detect and provide better error recovery when we encounter a git merge marker.  This
        // allows us to edit files with git-conflict markers in them in a much more pleasant manner.
         ConflictMarkerTrivia,
        // Literals
        /** 数组字面量 */
        NumericLiteral,
        /** 文本字面量 */
        StringLiteral,
        /** jsx文本 */
        JsxText,
        JsxTextAllWhiteSpaces,
        /** 正则表达式的文字  */
        RegularExpressionLiteral,
        /** 无替换模板文字 */
        NoSubstitutionTemplateLiteral,
        // Pseudo-literals
        /** 伪文字 模板的头  */
        TemplateHead,
        /** 伪文字 模板中间  */
        TemplateMiddle,
        /** 伪文字 模板的尾 */
        TemplateTail,
        // 标点符号
        /** { */
        OpenBraceToken,
        /** } */
        CloseBraceToken,
        /** ( */
        OpenParenToken,
        /** ) */
        CloseParenToken,
        /** [ */
        OpenBracketToken,
        /** ] */
        CloseBracketToken,
        /**  . 点 */
        DotToken,
        /** ...  */
        DotDotDotToken,
        /** ; 分号标记 */
        SemicolonToken,
        /** , 逗号令牌 */
        CommaToken,
        /** < 小于令牌 */
        LessThanToken,
        /** </ 小于斜杠令牌 */
        LessThanSlashToken,
        /** > 大于令牌 */
        GreaterThanToken,
        /** <=小于等于令牌 */
        LessThanEqualsToken,
        /** >=  */
        GreaterThanEqualsToken,
        /** == */
        EqualsEqualsToken,
        /** != */
        ExclamationEqualsToken,
        /** === */
        EqualsEqualsEqualsToken,
        /** !== */
        ExclamationEqualsEqualsToken,
        /** => */
        EqualsGreaterThanToken,
        /*** + */
        PlusToken,
        /** -减 */
        MinusToken,
        /** *星 */
        AsteriskToken,
        /** ** 星星 */
        AsteriskAsteriskToken,
        /** / 斜杠 */
        SlashToken,
        /** %  */
        PercentToken,
        /** ++ */
        PlusPlusToken,
        /** -- */
        MinusMinusToken,
        /** << */
        LessThanLessThanToken,
        /** >> */
        GreaterThanGreaterThanToken,
        /** >>> */
        GreaterThanGreaterThanGreaterThanToken,
        /** & */
        AmpersandToken,
        /** | */
        BarToken,
        /** ^ */
        CaretToken,
        /** ! */
        ExclamationToken,
        /** ~ */
        TildeToken,
        /** && */
        AmpersandAmpersandToken,
        /** || */
        BarBarToken,
        /** ? */
        QuestionToken,
        /** : */
        ColonToken,
        /** @ */
        AtToken,
        // Assignments
        /** = */
        EqualsToken,
        /** += */
        PlusEqualsToken,
        /** -= */
        MinusEqualsToken,
        /** *= */
        AsteriskEqualsToken,
        /** **= */
        AsteriskAsteriskEqualsToken,
        /** /= */
        SlashEqualsToken,
        /** %= */
        PercentEqualsToken,
        /** <<= */
        LessThanLessThanEqualsToken,
        /** >>= */
        GreaterThanGreaterThanEqualsToken,
        /** >>>= */
        GreaterThanGreaterThanGreaterThanEqualsToken,
        /** &= */
        AmpersandEqualsToken,
        /** |= */
        BarEqualsToken,
        /** ^=  */
        CaretEqualsToken,
        // Identifiers
        /** 标识符 */
        Identifier,
        // Reserved words
        /** 跳出 */
        BreakKeyword,
        /** 为 */
        CaseKeyword,
        /** 捕获 */
        CatchKeyword,
        /** 类 */
        ClassKeyword,
        /** 常量 */
        ConstKeyword,
        /** 继续 */
        ContinueKeyword,
        /** 调试 */
        DebuggerKeyword,
        /** 默认 */
        DefaultKeyword,
        /** 删除 */
        DeleteKeyword,
        /** 做do */
        DoKeyword,
        /** 否则 */
        ElseKeyword,
        /** 枚举  */
        EnumKeyword,
        /** 导出 */
        ExportKeyword,
        /** 扩展  */
        ExtendsKeyword,
        /** 假 */
        FalseKeyword,
        /** 最后 */
        FinallyKeyword,
        /** 循环 */
        ForKeyword,
        /** 函数 */
        FunctionKeyword,
        /** 如果 */
        IfKeyword,
        /** 引入 */
        ImportKeyword,
        /** 在 */
        InKeyword,
        /** 类为 */
        InstanceOfKeyword,
        /** 新建 */
        NewKeyword,
        /** 空 */
        NullKeyword,
        /** 返回 */
        ReturnKeyword,
        /** 父构造器 */
        SuperKeyword,
        /** 静态 */
        SwitchKeyword,
        /** 本对象 */
        ThisKeyword,
        /** 抛出 */
        ThrowKeyword,
        /** 真 */
        TrueKeyword,
        /** 尝试 */
        TryKeyword,
        /** 类型为 */
        TypeOfKeyword,
        /** 自由变量 */
        VarKeyword,
        /** 无值 */
        VoidKeyword,
        /** 判断循环 */
        WhileKeyword,
        /** 外扩 */
        WithKeyword,
        // Strict mode reserved words
        /** 实现 */
        ImplementsKeyword,
        /** 接口 */
        InterfaceKeyword,
        /** 变量 */
        LetKeyword,
        /** 包 */
        PackageKeyword,
        /** 私有 */
        PrivateKeyword,
        /** 保护 */
        ProtectedKeyword,
        /** 公开 */
        PublicKeyword,
        /** 静态 */
        StaticKeyword,
        /** 获取 */
        YieldKeyword,
        // Contextual keywords
        /** 抽象 */
        AbstractKeyword,
        /** 转为 */
        AsKeyword,
        /** 任何 */
        AnyKeyword,
        /** 异步 */
        AsyncKeyword,
        /** 等待 */
        AwaitKeyword,
        /** 布尔 */
        BooleanKeyword,
        /** 构造器 */
        ConstructorKeyword,
        /** 声明 */
        DeclareKeyword,
        /** 取 */
        GetKeyword,
        /** 是 */
        IsKeyword,
        /** 键为 */
        KeyOfKeyword,
        /** 模块 */
        ModuleKeyword,
        /** 名称空间 */
        NamespaceKeyword,
        /** 不可及 */
        NeverKeyword,
        /** 只读 */
        ReadonlyKeyword,
        /** 需求 */
        RequireKeyword,
        /** 数字 */
        NumberKeyword,
        /** 基对象 */
        ObjectKeyword,
        /** 置 */
        SetKeyword,
        /** 文本 */
        StringKeyword,
        /** 符号 */
        SymbolKeyword,
        /** 类型 */
        TypeKeyword,
        /** 未定义 */
        UndefinedKeyword,
        /** 从  */
        FromKeyword,
        /** 全局  */
        GlobalKeyword,
        /** 属于 */
        OfKeyword, // LastKeyword and LastToken

        // Parse tree nodes

        // Names
        /** 限定名  */
        QualifiedName,
        /** 计算属性名 */
        ComputedPropertyName,
        // Signature elements
        /** 类型参数 */
        TypeParameter,
        /** 参数 */
        Parameter,
        /** 装饰 */
        Decorator,
        // TypeMember
        /** 属性签名  */
        PropertySignature,
        /** 属性声明 */
        PropertyDeclaration,
        /** 成员签名 */
        MethodSignature,
        /** 成员声明 */
        MethodDeclaration,
        /** 构造函数 */
        Constructor,
        /** get */
        GetAccessor,
        /** 置 */
        SetAccessor,
        /** call */
        CallSignature,
        /** 构造签名 */
        ConstructSignature,
        /** 索引签名 */
        IndexSignature,
        // Type
        /** 类型谓词 */
        TypePredicate,
        /** 类型引用 */
        TypeReference,
        /** 函数类型 */
        FunctionType,
        /** 构造器类型 */
        ConstructorType,
        /** 类型查询  */
        TypeQuery,
        /** 类型字面量 */
        TypeLiteral,
        /** 数组类型 */
        ArrayType,
        /** 元组类型 */
        TupleType,
        /** 联合类型 */
        UnionType,
        /** 交叉类型 */
        IntersectionType,
        /** 括号类型 */
        ParenthesizedType,
        /** 本对象类型 */
        ThisType,
        /** 类型运算符  */
        TypeOperator,
        /** 索引访问类型 */
        IndexedAccessType,
        /** 映射类型 */
        MappedType,
        /** 字面量类型 */
        LiteralType,
        // Binding patterns
        /** 基对象绑定类型 */
        ObjectBindingPattern,
        /** 数组绑定类型 */

        ArrayBindingPattern,
        /** 绑定元素 */
        BindingElement,
        // Expression
        /** 数组字面量表达式 */
        ArrayLiteralExpression,
        /** 对象字面量表达式 */
        ObjectLiteralExpression,
        /** 属性访问表达式 */
        PropertyAccessExpression,
        /** 元数据访问表达式 */
        ElementAccessExpression,
        /** call表达式 */
        CallExpression,
        /** 新建表达式 */
        NewExpression,
        /** 标签模板表达式 */
        TaggedTemplateExpression,
        /** 类型声明表达式 */
        TypeAssertionExpression,
        /** 括号表达式 */
        ParenthesizedExpression,
        /** 函数表达式 */
        FunctionExpression,
        /** 箭头函数 */
        ArrowFunction,
        /** 删除表达式 */
        DeleteExpression,
        /** 类型为 表达式 */
        TypeOfExpression,
        /** 无值 表达式 */
        VoidExpression,
        /** 等待 表达式 */
        AwaitExpression,
        /** 前缀一元表达式  */
        PrefixUnaryExpression,
        /** 后缀一元表达式， */
        PostfixUnaryExpression,
        /** 二元表达式  */
        BinaryExpression,
        /** 条件表达式 */
        ConditionalExpression,
        /** 模板的表达 `${}` */
        TemplateExpression,
        /** 获取 表达式 */
        YieldExpression,
        /** 传播表达式 */
        SpreadElement,
        /** 类表达式 */
        ClassExpression,
        /** 略的表达 ...  */
        OmittedExpression,
        /** 类型参数表达式， */
        ExpressionWithTypeArguments,
        /** 转为表达式 */
        AsExpression,
        /** 非空表达式 */
        NonNullExpression,
        /** 元属性表达式  */
        MetaProperty,

        // Misc 杂项
        /** 模板跨度 */
        TemplateSpan,
        /** 分号类元素 */
        SemicolonClassElement,
        // Element
        /** 块 */
        Block,
        /** 变量语句 */
        VariableStatement,
        /** 空语句 */
        EmptyStatement,
        /** 表达式语句 */
        ExpressionStatement,
        /** 如果 语句 */
        IfStatement,
        /** 点语句 */
        DoStatement,
        /** 判断循环语句  */
        WhileStatement,
        /** 循环语句 */
        ForStatement,
        /** 循环在语句 */
        ForInStatement,
        /** 循环属于 语句 */
        ForOfStatement,
        /** 继续语句 */
        ContinueStatement,
        /** 跳出语句 */
        BreakStatement,
        /** 返回语句 */
        ReturnStatement,
        /** 外扩语句 */
        WithStatement,
        /** 假如语句 */
        SwitchStatement,
        /** 标签语句 */
        LabeledStatement,
        /** 抛出语句 */
        ThrowStatement,
        /** 尝试语句 */
        TryStatement,
        /** 调试语句 */
        DebuggerStatement,
        /** 变量的声明 */
        VariableDeclaration,
        /** 变量列表声明 */
        VariableDeclarationList,
        /** 函数声明 */
        FunctionDeclaration,
        /** 类声明 */
        ClassDeclaration,
        /** 接口声明 */
        InterfaceDeclaration,
        /** 类型别名声明 */
        TypeAliasDeclaration,
        /** 枚举声明 */
        EnumDeclaration,
        /** 模块声明 */
        ModuleDeclaration,
        /** 模块块 */
        ModuleBlock,
        /** 为 块 */
        CaseBlock,
        /** 名称空间导出声明 */
        NamespaceExportDeclaration,
        /** 引入等于声明 */
        ImportEqualsDeclaration,
        /** 引入声明 */
        ImportDeclaration,
        /**  引入规范 */
        ImportClause,
        /** 名称空间引入 */
        NamespaceImport,
        /** 名子引入 */
        NamedImports,
        /** 引入说明符 */
        ImportSpecifier,
        /** 出口赋值 */
        ExportAssignment,
        /** 出口声明 */
        ExportDeclaration,
        /** 名子导出 */
        NamedExports,
        /** 出口符号 */
        ExportSpecifier,
        /** 失踪声明 */
        MissingDeclaration,

        // Module references.
        /** 外部模块的参考 */
        ExternalModuleReference,

        // JSX
        /** jsx元素 */
        JsxElement,
        /** jsx自关闭元素 */
        JsxSelfClosingElement,
        /** jsx打开元素 */
        JsxOpeningElement,
        /** jsx关闭元素 */
        JsxClosingElement,
        /** jsx特性 */
        JsxAttribute,
        /** jsx特性集 */
        JsxAttributes,
        /** jsx传播特性 */
        JsxSpreadAttribute,
        /** jsx表达式 */
        JsxExpression,

        // Clauses
        /** 为 子句 */
        CaseClause,
        /** 默认子句 */
        DefaultClause,
        /** 遗产子句 */
        HeritageClause,
        /** 捕获子句 */
        CatchClause,

        // Property assignments
        /** 属性赋值 */
        PropertyAssignment,
        /** 速记属性赋值 */
        ShorthandPropertyAssignment,
        /** 传播赋值 */
        SpreadAssignment,

        // Enum
        /** 枚举成员 */
        EnumMember,
        // Top-level nodes
        /** 源码文件 */
        SourceFile,
        /** 程序集 */
        Bundle,

        // JSDoc nodes
        /** JSD类型表达式 */
        JSDocTypeExpression,
        // The * type
        /** JSD * 类型 */
        JSDocAllType,
        // The ? type
        /** JSD ?类型 */
        JSDocUnknownType,
        /** JSD空标签类型 */
        JSDocNullableType,
        /** JSD非空标签类型 */
        JSDocNonNullableType,
        /** JSD可选类型 */
        JSDocOptionalType,
        /** JSD函数类型 */
        JSDocFunctionType,
        /** JSD变量 */
        JSDocVariadicType,
        /** JSD注释类型 */
        JSDocComment,
        /** JSD标签 */
        JSDocTag,
        /** JSD增强标签 */
        JSDocAugmentsTag,
        /** JSD类标签 */
        JSDocClassTag,
        /** JSD参数标签 */
        JSDocParameterTag,
        /** JSD返回值标签 */
        JSDocReturnTag,
        /** JSD类型标签 */
        JSDocTypeTag,
        /** JSD模板标签 */
        JSDocTemplateTag,
        /** JSD定义标签 */
        JSDocTypedefTag,
        /** JSD属性标签 */
        JSDocPropertyTag,
        /** JSD类型字面量 */
        JSDocTypeLiteral,

        全局词典语句,
        局部词典语句,
        词典键,
        词典值,
        词典表达式,
        // Synthesized list
        /** 语法表 */
        SyntaxList,
        // Transformation nodes 转换节点
        /** 不发射语句 */
        NotEmittedStatement,
        /** 部分发出表达式 */
        PartiallyEmittedExpression,
        /** 逗号表达式列表 */
        CommaListExpression,
        /** 合并申报的标记  */
        MergeDeclarationMarker,
        /** 声明结束标记 */
        EndOfDeclarationMarker,

        // Enum value count
        /** 常量 */
        Count,
        // Markers
        /** 第一个赋值 = 等于令牌 */
        FirstAssignment = EqualsToken,
        /** 最后一个赋值 = ^=令牌 */
        LastAssignment = CaretEqualsToken,
        /** 第一个复合赋值 = +=令牌 */
        FirstCompoundAssignment = PlusEqualsToken,
        /** 最后一个复合赋值= ^=令牌  */
        LastCompoundAssignment = CaretEqualsToken,
        /** 第一个保留关键字 = 跳出令牌 */
        FirstReservedWord = BreakKeyword,
        /** 最后一个保留关键字 = 外扩令牌 */
        LastReservedWord = WithKeyword,
        /** 第一个关键字 = 跳出令牌 */
        FirstKeyword = BreakKeyword,
        /** 最后一个关键字 = 属于令牌 */
        LastKeyword = OfKeyword,
        /** 第一个未来保证字 = 实现令牌 */
        FirstFutureReservedWord = ImplementsKeyword,
        /** 最后一个未来保留字 = 获取令牌 */
        LastFutureReservedWord = YieldKeyword,
        /** 第一个类型节点 = 类型谓词 */
        FirstTypeNode = TypePredicate,
        /** 最后一个类型接 = 字面量类型 */
        LastTypeNode = LiteralType,
        /** 第一个标点符号 = { 开大括号令牌 */
        FirstPunctuation = OpenBraceToken,
        /** 最后一个标点符号 = ^=令牌 */
        LastPunctuation = CaretEqualsToken,
        /** 第一个令牌 = 未知 */
        FirstToken = Unknown,
        /** 最后一个令牌 = 最后一个关键字 */
        LastToken = LastKeyword,
        /** 第一个杂项令牌 = //单行注释 */
        FirstTriviaToken = SingleLineCommentTrivia,
        /** 最后一个杂项令牌 =git冲突标记 */
        LastTriviaToken = ConflictMarkerTrivia,
        /** 第一个字面量令牌 = 数字字面量 */
        FirstLiteralToken = NumericLiteral,
        /** 最后一个字面量令牌 =无替换模板字面量 */
        LastLiteralToken = NoSubstitutionTemplateLiteral,
        /** 第一个模板标记 = 无替换模板文字 */
        FirstTemplateToken = NoSubstitutionTemplateLiteral,
        /** 最后一个模板标记 = 伪文字 模板的尾 */
        LastTemplateToken = TemplateTail,
        /** 第一个二元运算符 = < 令牌 */
        FirstBinaryOperator = LessThanToken,
        /** 最后一个二元运算符 = ^=令牌 */
        LastBinaryOperator = CaretEqualsToken,
        /** 第一个节点 = 限定名 */
        FirstNode = QualifiedName,
        /** 第一个JSD节点 = JSD类型表达式 */
        FirstJSDocNode = JSDocTypeExpression,
        /** 最后一个JSD节点 = JSD类型字面量 */
        LastJSDocNode = JSDocTypeLiteral,
        /** 第一个JSD标签节点 = JSD标签 */
        FirstJSDocTagNode = JSDocTag,
        /** 最后一个JSD标签节点 = JSD字类型面量 */
        LastJSDocTagNode = JSDocTypeLiteral
    }

    export const enum NodeFlags {
        None = 0,
        Let = 1 << 0,  // Variable declaration
        Const = 1 << 1,  // Variable declaration
        NestedNamespace = 1 << 2,  // Namespace declaration
        Synthesized = 1 << 3,  // Node was synthesized during transformation合成过程中转换节点
        Namespace = 1 << 4,  // Namespace declaration
        ExportContext = 1 << 5,  // Export context (initialized by binding)
        ContainsThis = 1 << 6,  // Interface contains references to "this"
        HasImplicitReturn = 1 << 7,  // If function implicitly returns on one of codepaths (initialized by binding)
        HasExplicitReturn = 1 << 8,  // If function has explicit reachable return on one of codepaths (initialized by binding)
        GlobalAugmentation = 1 << 9,  // Set if module declaration is an augmentation for the global scope
        HasAsyncFunctions = 1 << 10, // If the file has async functions (initialized by binding)
        DisallowInContext = 1 << 11, // If node was parsed in a context where 'in-expressions' are not allowed
        YieldContext = 1 << 12, // If node was parsed in the 'yield' context created when parsing a generator
        DecoratorContext = 1 << 13, // If node was parsed as part of a decorator
        AwaitContext = 1 << 14, // If node was parsed in the 'await' context created when parsing an async function
        ThisNodeHasError = 1 << 15, // If the parser encountered an error when parsing the code that created this node
        JavaScriptFile = 1 << 16, // If node was parsed in a JavaScript
        ThisNodeOrAnySubNodesHasError = 1 << 17, // If this node or any of its children had an error
        HasAggregatedChildData = 1 << 18, // If we've computed data from children and cached it in this node

        // This flag will be set when the parser encounters a dynamic import expression so that module resolution
        // will not have to walk the tree if the flag is not set. However, this flag is just a approximation because
        // once it is set, the flag never gets cleared (hence why it's named "PossiblyContainsDynamicImport").
        // During editing, if dynamic import is removed, incremental parsing will *NOT* update this flag. This means that the tree will always be traversed
        // during module resolution. However, the removal operation should not occur often and in the case of the
        // removal, it is likely that users will add the import anyway.
        // The advantage of this approach is its simplicity. For the case of batch compilation,
        // we guarantee that users won't have to pay the price of walking the tree if a dynamic import isn't used.
        /* @internal */
        PossiblyContainsDynamicImport = 1 << 19,
        JSDoc = 1 << 20, // If node was parsed inside jsdoc
        词典标签 = 1 << 21,

        BlockScoped = Let | Const,

        ReachabilityCheckFlags = HasImplicitReturn | HasExplicitReturn,
        ReachabilityAndEmitFlags = ReachabilityCheckFlags | HasAsyncFunctions,

        // Parsing context flags
        ContextFlags = DisallowInContext | YieldContext | DecoratorContext | AwaitContext | JavaScriptFile,

        // Exclude these flags when parsing a Type
        TypeExcludesFlags = YieldContext | AwaitContext,
    }

    export const enum ModifierFlags {
        None = 0,
        Export = 1 << 0,  // Declarations
        Ambient = 1 << 1,  // Declarations
        Public = 1 << 2,  // Property/Method
        Private = 1 << 3,  // Property/Method
        Protected = 1 << 4,  // Property/Method
        Static = 1 << 5,  // Property/Method
        Readonly = 1 << 6,  // Property/Method
        Abstract = 1 << 7,  // Class/Method/ConstructSignature
        Async = 1 << 8,  // Property/Method/Function
        Default = 1 << 9,  // Function/Class (export default declaration)
        Const = 1 << 11, // Variable declaration
        HasComputedFlags = 1 << 29, // Modifier flags have been computed

        AccessibilityModifier = Public | Private | Protected,
        // Accessibility modifiers and 'readonly' can be attached to a parameter in a constructor to make it a property.
        ParameterPropertyModifier = AccessibilityModifier | Readonly,
        NonPublicAccessibilityModifier = Private | Protected,

        TypeScriptModifier = Ambient | Public | Private | Protected | Readonly | Abstract | Const,
        ExportDefault = Export | Default,
    }

    export const enum JsxFlags {
        None = 0,
        /** An element from a named property of the JSX.IntrinsicElements interface */
        IntrinsicNamedElement = 1 << 0,
        /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
        IntrinsicIndexedElement = 1 << 1,

        IntrinsicElement = IntrinsicNamedElement | IntrinsicIndexedElement,
    }

    /* @internal */
    /** 关系比较结果 */
    export const enum RelationComparisonResult {
        /** 成功 */
        Succeeded = 1, // Should be truthy
        /** 失败 */
        Failed = 2,
        /** 失败的报道 */
        FailedAndReported = 3
    }

    export interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        别名?: 别名;
        别名id?: number;
        局部词典语句?: 局部词典语句[];
        /* @internal */ modifierFlagsCache?: ModifierFlags;
        /* @internal */ transformFlags?: TransformFlags;
        decorators?: NodeArray<Decorator>;              // Array of decorators (in document order)
        modifiers?: ModifiersArray;                     // Array of modifiers
        /* @internal */ id?: number;                    // Unique id (used to look up NodeLinks)
        parent?: Node;                                  // Parent node (initialized by binding)
        /* @internal */ original?: Node;                // The original node if this is an updated node.
        /* @internal */ startsOnNewLine?: boolean;      // Whether a synthesized node should start on a new line (used by transforms).
        /* @internal */ jsDoc?: JSDoc[];                // JSDoc that directly precedes this node
        /* @internal */ jsDocCache?: JSDocTag[];        // Cache for getJSDocTags
        /* @internal */ symbol?: Symbol;                // Symbol declared by node (initialized by binding)
        /* @internal */ locals?: SymbolTable;           // Locals associated with node (initialized by binding)
        /* @internal */ nextContainer?: Node;           // Next container in declaration order (initialized by binding)
        /* @internal */ localSymbol?: Symbol;           // Local symbol declared by node (initialized by binding only for exported nodes)
        /* @internal */ flowNode?: FlowNode;            // Associated FlowNode (initialized by binding)
        /* @internal */ emitNode?: EmitNode;            // Associated EmitNode (initialized by transforms)
        /* @internal */ contextualType?: Type;          // Used to temporarily assign a contextual type during overload resolution
        /* @internal */ contextualMapper?: TypeMapper;  // Mapper for contextual type
    }


    export interface NodeArray<T extends Node> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
        /* @internal */ transformFlags?: TransformFlags;
    }

    export interface Token<TKind extends SyntaxKind> extends Node {
        kind: TKind;
    }

    export type DotDotDotToken = Token<SyntaxKind.DotDotDotToken>;
    export type QuestionToken = Token<SyntaxKind.QuestionToken>;
    export type ColonToken = Token<SyntaxKind.ColonToken>;
    export type EqualsToken = Token<SyntaxKind.EqualsToken>;
    export type AsteriskToken = Token<SyntaxKind.AsteriskToken>;
    export type EqualsGreaterThanToken = Token<SyntaxKind.EqualsGreaterThanToken>;
    export type EndOfFileToken = Token<SyntaxKind.EndOfFileToken>;
    export type AtToken = Token<SyntaxKind.AtToken>;
    export type ReadonlyToken = Token<SyntaxKind.ReadonlyKeyword>;
    export type AwaitKeywordToken = Token<SyntaxKind.AwaitKeyword>;

    export type Modifier
        = Token<SyntaxKind.AbstractKeyword>
        | Token<SyntaxKind.AsyncKeyword>
        | Token<SyntaxKind.ConstKeyword>
        | Token<SyntaxKind.DeclareKeyword>
        | Token<SyntaxKind.DefaultKeyword>
        | Token<SyntaxKind.ExportKeyword>
        | Token<SyntaxKind.PublicKeyword>
        | Token<SyntaxKind.PrivateKeyword>
        | Token<SyntaxKind.ProtectedKeyword>
        | Token<SyntaxKind.ReadonlyKeyword>
        | Token<SyntaxKind.StaticKeyword>
        ;

    export type ModifiersArray = NodeArray<Modifier>;

    /*@internal*/
    export const enum GeneratedIdentifierKind {
        None,   // Not automatically generated.
        Auto,   // Automatically generated identifier.
        Loop,   // Automatically generated identifier with a preference for '_i'.
        Unique, // Unique name based on the 'text' property.
        Node,   // Unique name based on the node in the 'original' property.
    }

    export interface Identifier extends PrimaryExpression {
        kind: SyntaxKind.Identifier;
        /**
         * Text of identifier (with escapes converted to characters).
         * If the identifier begins with two underscores, this will begin with three.
         */
        text: __String;
        originalKeywordKind?: SyntaxKind;                         // Original syntaxKind which get set so that we can report an error later
        /*@internal*/ autoGenerateKind?: GeneratedIdentifierKind; // Specifies whether to auto-generate the text for an identifier.
        /*@internal*/ autoGenerateId?: number;                    // Ensures unique generated identifiers get unique names, but clones get the same name.
        isInJSDocNamespace?: boolean;                             // if the node is a member in a JSDoc namespace
        /*@internal*/ typeArguments?: NodeArray<TypeNode>;        // Only defined on synthesized nodes. Though not syntactically valid, used in emitting diagnostics.
        /*@internal*/ jsdocDotPos?: number;                       // Identifier occurs in JSDoc-style generic: Id.<T>
    }

    // Transient identifier node (marked by id === -1)
    export interface TransientIdentifier extends Identifier {
        resolvedSymbol: Symbol;
    }

    /*@internal*/
    export interface GeneratedIdentifier extends Identifier {
        autoGenerateKind: GeneratedIdentifierKind.Auto
        | GeneratedIdentifierKind.Loop
        | GeneratedIdentifierKind.Unique
        | GeneratedIdentifierKind.Node;
    }

    export interface QualifiedName extends Node {
        kind: SyntaxKind.QualifiedName;
        left: EntityName;
        right: Identifier;
        /*@internal*/ jsdocDotPos?: number;                      // QualifiedName occurs in JSDoc-style generic: Id1.Id2.<T>
    }

    export type EntityName = Identifier | QualifiedName;

    export type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName;

    export type DeclarationName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName | BindingPattern;

    export interface Declaration extends Node {
        _declarationBrand: any;
    }

    export interface NamedDeclaration extends Declaration {
        name?: DeclarationName;
    }

    export interface DeclarationStatement extends NamedDeclaration, Statement {
        name?: Identifier | StringLiteral | NumericLiteral;
    }

    export interface ComputedPropertyName extends Node {
        kind: SyntaxKind.ComputedPropertyName;
        expression: Expression;
    }

    export interface Decorator extends Node {
        kind: SyntaxKind.Decorator;
        expression: LeftHandSideExpression;
    }

    export interface TypeParameterDeclaration extends NamedDeclaration {
        kind: SyntaxKind.TypeParameter;
        parent?: DeclarationWithTypeParameters;
        name: Identifier;
        constraint?: TypeNode;
        default?: TypeNode;

        // For error recovery purposes.
        expression?: Expression;
    }

    export interface SignatureDeclaration extends NamedDeclaration {
        name?: PropertyName;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }

    export interface CallSignatureDeclaration extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.CallSignature;
    }

    export interface ConstructSignatureDeclaration extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.ConstructSignature;
    }

    export type BindingName = Identifier | BindingPattern;

    export interface VariableDeclaration extends NamedDeclaration {
        kind: SyntaxKind.VariableDeclaration;
        parent?: VariableDeclarationList | CatchClause;
        name: BindingName;                  // Declared variable name
        type?: TypeNode;                    // Optional type annotation
        initializer?: Expression;           // Optional initializer
    }

    export interface VariableDeclarationList extends Node {
        kind: SyntaxKind.VariableDeclarationList;
        parent?: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
        declarations: NodeArray<VariableDeclaration>;
    }

    export interface ParameterDeclaration extends NamedDeclaration {
        kind: SyntaxKind.Parameter;
        parent?: SignatureDeclaration;
        dotDotDotToken?: DotDotDotToken;    // Present on rest parameter
        name: BindingName;                  // Declared parameter name
        questionToken?: QuestionToken;      // Present on optional parameter
        type?: TypeNode;                    // Optional type annotation
        initializer?: Expression;           // Optional initializer
    }

    export interface BindingElement extends NamedDeclaration {
        kind: SyntaxKind.BindingElement;
        parent?: BindingPattern;
        propertyName?: PropertyName;        // Binding property name (in object binding pattern)
        dotDotDotToken?: DotDotDotToken;    // Present on rest element (in object binding pattern)
        name: BindingName;                  // Declared binding element name
        initializer?: Expression;           // Optional initializer
    }

    export interface PropertySignature extends TypeElement {
        kind: SyntaxKind.PropertySignature;
        name: PropertyName;                 // Declared property name
        questionToken?: QuestionToken;      // Present on optional property
        type?: TypeNode;                    // Optional type annotation
        initializer?: Expression;           // Optional initializer
    }

    export interface PropertyDeclaration extends ClassElement {
        kind: SyntaxKind.PropertyDeclaration;
        questionToken?: QuestionToken;      // Present for use with reporting a grammar error
        name: PropertyName;
        type?: TypeNode;
        initializer?: Expression;           // Optional initializer
    }

    export interface ObjectLiteralElement extends NamedDeclaration {
        _objectLiteralBrandBrand: any;
        name?: PropertyName;
    }

    export type ObjectLiteralElementLike
        = PropertyAssignment
        | ShorthandPropertyAssignment
        | SpreadAssignment
        | MethodDeclaration
        | AccessorDeclaration
        ;

    export interface PropertyAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.PropertyAssignment;
        name: PropertyName;
        questionToken?: QuestionToken;
        initializer: Expression;
    }

    export interface ShorthandPropertyAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.ShorthandPropertyAssignment;
        name: Identifier;
        questionToken?: QuestionToken;
        // used when ObjectLiteralExpression is used in ObjectAssignmentPattern
        // it is grammar error to appear in actual object initializer
        equalsToken?: Token<SyntaxKind.EqualsToken>;
        objectAssignmentInitializer?: Expression;
    }

    export interface SpreadAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.SpreadAssignment;
        expression: Expression;
    }

    // SyntaxKind.VariableDeclaration
    // SyntaxKind.Parameter
    // SyntaxKind.BindingElement
    // SyntaxKind.Property
    // SyntaxKind.PropertyAssignment
    // SyntaxKind.JsxAttribute
    // SyntaxKind.ShorthandPropertyAssignment
    // SyntaxKind.EnumMember
    // SyntaxKind.JSDocPropertyTag
    export interface VariableLikeDeclaration extends NamedDeclaration {
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: DeclarationName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }

    export interface PropertyLikeDeclaration extends NamedDeclaration {
        name: PropertyName;
    }

    export interface ObjectBindingPattern extends Node {
        kind: SyntaxKind.ObjectBindingPattern;
        parent?: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<BindingElement>;
    }

    export interface ArrayBindingPattern extends Node {
        kind: SyntaxKind.ArrayBindingPattern;
        parent?: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<ArrayBindingElement>;
    }

    export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;

    export type ArrayBindingElement = BindingElement | OmittedExpression;

    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclarationBase.
     * Examples:
     * - FunctionDeclaration
     * - MethodDeclaration
     * - AccessorDeclaration
     */
    export interface FunctionLikeDeclarationBase extends SignatureDeclaration {
        _functionLikeDeclarationBrand: any;

        asteriskToken?: AsteriskToken;
        questionToken?: QuestionToken;
        body?: Block | Expression;
    }

    export type FunctionLikeDeclaration =
        | FunctionDeclaration
        | MethodDeclaration
        | ConstructorDeclaration
        | GetAccessorDeclaration
        | SetAccessorDeclaration
        | FunctionExpression
        | ArrowFunction;
    export type FunctionLike =
        | FunctionLikeDeclaration
        | FunctionTypeNode
        | ConstructorTypeNode
        | IndexSignatureDeclaration
        | MethodSignature
        | ConstructSignatureDeclaration
        | CallSignatureDeclaration;

    export interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement {
        kind: SyntaxKind.FunctionDeclaration;
        name?: Identifier;
        body?: FunctionBody;
    }

    export interface MethodSignature extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.MethodSignature;
        name: PropertyName;
    }

    // Note that a MethodDeclaration is considered both a ClassElement and an ObjectLiteralElement.
    // Both the grammars for ClassDeclaration and ObjectLiteralExpression allow for MethodDeclarations
    // as child elements, and so a MethodDeclaration satisfies both interfaces.  This avoids the
    // alternative where we would need separate kinds/types for ClassMethodDeclaration and
    // ObjectLiteralMethodDeclaration, which would look identical.
    //
    // Because of this, it may be necessary to determine what sort of MethodDeclaration you have
    // at later stages of the compiler pipeline.  In that case, you can either check the parent kind
    // of the method, or use helpers like isObjectLiteralMethodDeclaration
    export interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.MethodDeclaration;
        name: PropertyName;
        body?: FunctionBody;
    }

    export interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement {
        kind: SyntaxKind.Constructor;
        parent?: ClassDeclaration | ClassExpression;
        body?: FunctionBody;
    }

    /** For when we encounter a semicolon in a class declaration. ES6 allows these as class elements. */
    export interface SemicolonClassElement extends ClassElement {
        kind: SyntaxKind.SemicolonClassElement;
        parent?: ClassDeclaration | ClassExpression;
    }

    // See the comment on MethodDeclaration for the intuition behind GetAccessorDeclaration being a
    // ClassElement and an ObjectLiteralElement.
    export interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.GetAccessor;
        parent?: ClassDeclaration | ClassExpression | ObjectLiteralExpression;
        name: PropertyName;
        body: FunctionBody;
    }

    // See the comment on MethodDeclaration for the intuition behind SetAccessorDeclaration being a
    // ClassElement and an ObjectLiteralElement.
    export interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.SetAccessor;
        parent?: ClassDeclaration | ClassExpression | ObjectLiteralExpression;
        name: PropertyName;
        body: FunctionBody;
    }

    export type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;

    export interface IndexSignatureDeclaration extends SignatureDeclaration, ClassElement, TypeElement {
        kind: SyntaxKind.IndexSignature;
        parent?: ClassDeclaration | ClassExpression | InterfaceDeclaration | TypeLiteralNode;
    }

    export interface TypeNode extends Node {
        _typeNodeBrand: any;
    }

    export interface KeywordTypeNode extends TypeNode {
        kind: SyntaxKind.AnyKeyword
        | SyntaxKind.NumberKeyword
        | SyntaxKind.ObjectKeyword
        | SyntaxKind.BooleanKeyword
        | SyntaxKind.StringKeyword
        | SyntaxKind.SymbolKeyword
        | SyntaxKind.ThisKeyword
        | SyntaxKind.VoidKeyword
        | SyntaxKind.UndefinedKeyword
        | SyntaxKind.NullKeyword
        | SyntaxKind.NeverKeyword;
    }

    export interface ThisTypeNode extends TypeNode {
        kind: SyntaxKind.ThisType;
    }

    export type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;

    export interface FunctionTypeNode extends TypeNode, SignatureDeclaration {
        kind: SyntaxKind.FunctionType;
    }

    export interface ConstructorTypeNode extends TypeNode, SignatureDeclaration {
        kind: SyntaxKind.ConstructorType;
    }

    export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;

    export interface TypeReferenceNode extends TypeNode {
        kind: SyntaxKind.TypeReference;
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }

    export interface TypePredicateNode extends TypeNode {
        kind: SyntaxKind.TypePredicate;
        parameterName: Identifier | ThisTypeNode;
        type: TypeNode;
    }

    export interface TypeQueryNode extends TypeNode {
        kind: SyntaxKind.TypeQuery;
        exprName: EntityName;
    }

    // A TypeLiteral is the declaration node for an anonymous symbol.
    export interface TypeLiteralNode extends TypeNode, Declaration {
        kind: SyntaxKind.TypeLiteral;
        members: NodeArray<TypeElement>;
    }

    export interface ArrayTypeNode extends TypeNode {
        kind: SyntaxKind.ArrayType;
        elementType: TypeNode;
    }

    export interface TupleTypeNode extends TypeNode {
        kind: SyntaxKind.TupleType;
        elementTypes: NodeArray<TypeNode>;
    }

    export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;

    export interface UnionTypeNode extends TypeNode {
        kind: SyntaxKind.UnionType;
        types: NodeArray<TypeNode>;
    }

    export interface IntersectionTypeNode extends TypeNode {
        kind: SyntaxKind.IntersectionType;
        types: NodeArray<TypeNode>;
    }

    export interface ParenthesizedTypeNode extends TypeNode {
        kind: SyntaxKind.ParenthesizedType;
        type: TypeNode;
    }

    export interface TypeOperatorNode extends TypeNode {
        kind: SyntaxKind.TypeOperator;
        operator: SyntaxKind.KeyOfKeyword;
        type: TypeNode;
    }

    export interface IndexedAccessTypeNode extends TypeNode {
        kind: SyntaxKind.IndexedAccessType;
        objectType: TypeNode;
        indexType: TypeNode;
    }

    export interface MappedTypeNode extends TypeNode, Declaration {
        kind: SyntaxKind.MappedType;
        parent?: TypeAliasDeclaration;
        readonlyToken?: ReadonlyToken;
        typeParameter: TypeParameterDeclaration;
        questionToken?: QuestionToken;
        type?: TypeNode;
    }

    export interface LiteralTypeNode extends TypeNode {
        kind: SyntaxKind.LiteralType;
        literal: Expression;
    }

    export interface StringLiteral extends LiteralExpression {
        kind: SyntaxKind.StringLiteral;
        /* @internal */ textSourceNode?: Identifier | StringLiteral | NumericLiteral; // Allows a StringLiteral to get its text from another node (used by transforms).
    }

    // Note: 'brands' in our syntax nodes serve to give us a small amount of nominal typing.
    // Consider 'Expression'.  Without the brand, 'Expression' is actually no different
    // (structurally) than 'Node'.  Because of this you can pass any Node to a function that
    // takes an Expression without any error.  By using the 'brands' we ensure that the type
    // checker actually thinks you have something of the right type.  Note: the brands are
    // never actually given values.  At runtime they have zero cost.

    export interface Expression extends Node {
        _expressionBrand: any;
    }

    export interface OmittedExpression extends Expression {
        kind: SyntaxKind.OmittedExpression;
    }

    // Represents an expression that is elided as part of a transformation to emit comments on a
    // not-emitted node. The 'expression' property of a PartiallyEmittedExpression should be emitted.
    export interface PartiallyEmittedExpression extends LeftHandSideExpression {
        kind: SyntaxKind.PartiallyEmittedExpression;
        expression: Expression;
    }

    export interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }

    /** Deprecated, please use UpdateExpression */
    export type IncrementExpression = UpdateExpression;
    export interface UpdateExpression extends UnaryExpression {
        _updateExpressionBrand: any;
    }

    // see: https://tc39.github.io/ecma262/#prod-UpdateExpression
    // see: https://tc39.github.io/ecma262/#prod-UnaryExpression
    export type PrefixUnaryOperator
        = SyntaxKind.PlusPlusToken
        | SyntaxKind.MinusMinusToken
        | SyntaxKind.PlusToken
        | SyntaxKind.MinusToken
        | SyntaxKind.TildeToken
        | SyntaxKind.ExclamationToken;

    export interface PrefixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PrefixUnaryExpression;
        operator: PrefixUnaryOperator;
        operand: UnaryExpression;
    }

    // see: https://tc39.github.io/ecma262/#prod-UpdateExpression
    export type PostfixUnaryOperator
        = SyntaxKind.PlusPlusToken
        | SyntaxKind.MinusMinusToken
        ;

    export interface PostfixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PostfixUnaryExpression;
        operand: LeftHandSideExpression;
        operator: PostfixUnaryOperator;
    }

    export interface LeftHandSideExpression extends UpdateExpression {
        _leftHandSideExpressionBrand: any;
    }

    export interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }

    export interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }

    export interface NullLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.NullKeyword;
    }

    export interface BooleanLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.TrueKeyword | SyntaxKind.FalseKeyword;
    }

    export interface ThisExpression extends PrimaryExpression, KeywordTypeNode {
        kind: SyntaxKind.ThisKeyword;
    }

    export interface SuperExpression extends PrimaryExpression {
        kind: SyntaxKind.SuperKeyword;
    }

    export interface ImportExpression extends PrimaryExpression {
        kind: SyntaxKind.ImportKeyword;
    }

    export interface DeleteExpression extends UnaryExpression {
        kind: SyntaxKind.DeleteExpression;
        expression: UnaryExpression;
    }

    export interface TypeOfExpression extends UnaryExpression {
        kind: SyntaxKind.TypeOfExpression;
        expression: UnaryExpression;
    }

    export interface VoidExpression extends UnaryExpression {
        kind: SyntaxKind.VoidExpression;
        expression: UnaryExpression;
    }

    export interface AwaitExpression extends UnaryExpression {
        kind: SyntaxKind.AwaitExpression;
        expression: UnaryExpression;
    }

    export interface YieldExpression extends Expression {
        kind: SyntaxKind.YieldExpression;
        asteriskToken?: AsteriskToken;
        expression?: Expression;
    }

    // see: https://tc39.github.io/ecma262/#prod-ExponentiationExpression
    export type ExponentiationOperator
        = SyntaxKind.AsteriskAsteriskToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-MultiplicativeOperator
    export type MultiplicativeOperator
        = SyntaxKind.AsteriskToken
        | SyntaxKind.SlashToken
        | SyntaxKind.PercentToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-MultiplicativeExpression
    export type MultiplicativeOperatorOrHigher
        = ExponentiationOperator
        | MultiplicativeOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-AdditiveExpression
    export type AdditiveOperator
        = SyntaxKind.PlusToken
        | SyntaxKind.MinusToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-AdditiveExpression
    export type AdditiveOperatorOrHigher
        = MultiplicativeOperatorOrHigher
        | AdditiveOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-ShiftExpression
    export type ShiftOperator
        = SyntaxKind.LessThanLessThanToken
        | SyntaxKind.GreaterThanGreaterThanToken
        | SyntaxKind.GreaterThanGreaterThanGreaterThanToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-ShiftExpression
    export type ShiftOperatorOrHigher
        = AdditiveOperatorOrHigher
        | ShiftOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-RelationalExpression
    export type RelationalOperator
        = SyntaxKind.LessThanToken
        | SyntaxKind.LessThanEqualsToken
        | SyntaxKind.GreaterThanToken
        | SyntaxKind.GreaterThanEqualsToken
        | SyntaxKind.InstanceOfKeyword
        | SyntaxKind.InKeyword
        ;

    // see: https://tc39.github.io/ecma262/#prod-RelationalExpression
    export type RelationalOperatorOrHigher
        = ShiftOperatorOrHigher
        | RelationalOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-EqualityExpression
    export type EqualityOperator
        = SyntaxKind.EqualsEqualsToken
        | SyntaxKind.EqualsEqualsEqualsToken
        | SyntaxKind.ExclamationEqualsEqualsToken
        | SyntaxKind.ExclamationEqualsToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-EqualityExpression
    export type EqualityOperatorOrHigher
        = RelationalOperatorOrHigher
        | EqualityOperator;

    // see: https://tc39.github.io/ecma262/#prod-BitwiseANDExpression
    // see: https://tc39.github.io/ecma262/#prod-BitwiseXORExpression
    // see: https://tc39.github.io/ecma262/#prod-BitwiseORExpression
    export type BitwiseOperator
        = SyntaxKind.AmpersandToken
        | SyntaxKind.BarToken
        | SyntaxKind.CaretToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-BitwiseANDExpression
    // see: https://tc39.github.io/ecma262/#prod-BitwiseXORExpression
    // see: https://tc39.github.io/ecma262/#prod-BitwiseORExpression
    export type BitwiseOperatorOrHigher
        = EqualityOperatorOrHigher
        | BitwiseOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-LogicalANDExpression
    // see: https://tc39.github.io/ecma262/#prod-LogicalORExpression
    export type LogicalOperator
        = SyntaxKind.AmpersandAmpersandToken
        | SyntaxKind.BarBarToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-LogicalANDExpression
    // see: https://tc39.github.io/ecma262/#prod-LogicalORExpression
    export type LogicalOperatorOrHigher
        = BitwiseOperatorOrHigher
        | LogicalOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-AssignmentOperator
    export type CompoundAssignmentOperator
        = SyntaxKind.PlusEqualsToken
        | SyntaxKind.MinusEqualsToken
        | SyntaxKind.AsteriskAsteriskEqualsToken
        | SyntaxKind.AsteriskEqualsToken
        | SyntaxKind.SlashEqualsToken
        | SyntaxKind.PercentEqualsToken
        | SyntaxKind.AmpersandEqualsToken
        | SyntaxKind.BarEqualsToken
        | SyntaxKind.CaretEqualsToken
        | SyntaxKind.LessThanLessThanEqualsToken
        | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken
        | SyntaxKind.GreaterThanGreaterThanEqualsToken
        ;

    // see: https://tc39.github.io/ecma262/#prod-AssignmentExpression
    export type AssignmentOperator
        = SyntaxKind.EqualsToken
        | CompoundAssignmentOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-AssignmentExpression
    export type AssignmentOperatorOrHigher
        = LogicalOperatorOrHigher
        | AssignmentOperator
        ;

    // see: https://tc39.github.io/ecma262/#prod-Expression
    export type BinaryOperator
        = AssignmentOperatorOrHigher
        | SyntaxKind.CommaToken
        ;

    export type BinaryOperatorToken = Token<BinaryOperator>;

    export interface BinaryExpression extends Expression, Declaration {
        kind: SyntaxKind.BinaryExpression;
        left: Expression;
        operatorToken: BinaryOperatorToken;
        right: Expression;
    }

    export type AssignmentOperatorToken = Token<AssignmentOperator>;

    export interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
        left: LeftHandSideExpression;
        operatorToken: TOperator;
    }

    export interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ObjectLiteralExpression;
    }

    export interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ArrayLiteralExpression;
    }

    export type DestructuringAssignment
        = ObjectDestructuringAssignment
        | ArrayDestructuringAssignment
        ;

    export type BindingOrAssignmentElement
        = VariableDeclaration
        | ParameterDeclaration
        | BindingElement
        | PropertyAssignment // AssignmentProperty
        | ShorthandPropertyAssignment // AssignmentProperty
        | SpreadAssignment // AssignmentRestProperty
        | OmittedExpression // Elision
        | SpreadElement // AssignmentRestElement
        | ArrayLiteralExpression // ArrayAssignmentPattern
        | ObjectLiteralExpression // ObjectAssignmentPattern
        | AssignmentExpression<EqualsToken> // AssignmentElement
        | Identifier // DestructuringAssignmentTarget
        | PropertyAccessExpression // DestructuringAssignmentTarget
        | ElementAccessExpression // DestructuringAssignmentTarget
        ;

    export type BindingOrAssignmentElementRestIndicator
        = DotDotDotToken // from BindingElement
        | SpreadElement // AssignmentRestElement
        | SpreadAssignment // AssignmentRestProperty
        ;

    export type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Expression;

    export type ObjectBindingOrAssignmentPattern
        = ObjectBindingPattern
        | ObjectLiteralExpression // ObjectAssignmentPattern
        ;

    export type ArrayBindingOrAssignmentPattern
        = ArrayBindingPattern
        | ArrayLiteralExpression // ArrayAssignmentPattern
        ;

    export type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;

    export type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;

    export interface ConditionalExpression extends Expression {
        kind: SyntaxKind.ConditionalExpression;
        condition: Expression;
        questionToken: QuestionToken;
        whenTrue: Expression;
        colonToken: ColonToken;
        whenFalse: Expression;
    }

    export type FunctionBody = Block;
    export type ConciseBody = FunctionBody | Expression;

    export interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase {
        kind: SyntaxKind.FunctionExpression;
        name?: Identifier;
        body: FunctionBody;  // Required, whereas the member inherited from FunctionDeclaration is optional
    }

    export interface ArrowFunction extends Expression, FunctionLikeDeclarationBase {
        kind: SyntaxKind.ArrowFunction;
        equalsGreaterThanToken: EqualsGreaterThanToken;
        body: ConciseBody;
    }

    // The text property of a LiteralExpression stores the interpreted value of the literal in text form. For a StringLiteral,
    // or any literal of a template, this means quotes have been removed and escapes have been converted to actual characters.
    // For a NumericLiteral, the stored value is the toString() representation of the number. For example 1, 1.00, and 1e0 are all stored as just "1".
    export interface LiteralLikeNode extends Node {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }

    // The text property of a LiteralExpression stores the interpreted value of the literal in text form. For a StringLiteral,
    // or any literal of a template, this means quotes have been removed and escapes have been converted to actual characters.
    // For a NumericLiteral, the stored value is the toString() representation of the number. For example 1, 1.00, and 1e0 are all stored as just "1".
    export interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
        _literalExpressionBrand: any;
    }

    export interface RegularExpressionLiteral extends LiteralExpression {
        kind: SyntaxKind.RegularExpressionLiteral;
    }

    export interface NoSubstitutionTemplateLiteral extends LiteralExpression {
        kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    }

    /* @internal */
    export const enum NumericLiteralFlags {
        None = 0,
        Scientific = 1 << 1,        // e.g. `10e2`
        Octal = 1 << 2,             // e.g. `0777`
        HexSpecifier = 1 << 3,      // e.g. `0x00000000`
        BinarySpecifier = 1 << 4,   // e.g. `0b0110010000000000`
        OctalSpecifier = 1 << 5,    // e.g. `0o777`
        BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
    }

    export interface NumericLiteral extends LiteralExpression {
        kind: SyntaxKind.NumericLiteral;
        /* @internal */
        numericLiteralFlags?: NumericLiteralFlags;
    }

    export interface TemplateHead extends LiteralLikeNode {
        kind: SyntaxKind.TemplateHead;
        parent?: TemplateExpression;
    }

    export interface TemplateMiddle extends LiteralLikeNode {
        kind: SyntaxKind.TemplateMiddle;
        parent?: TemplateSpan;
    }

    export interface TemplateTail extends LiteralLikeNode {
        kind: SyntaxKind.TemplateTail;
        parent?: TemplateSpan;
    }

    export type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;

    export interface TemplateExpression extends PrimaryExpression {
        kind: SyntaxKind.TemplateExpression;
        head: TemplateHead;
        templateSpans: NodeArray<TemplateSpan>;
    }

    // Each of these corresponds to a substitution expression and a template literal, in that order.
    // The template literal must have kind TemplateMiddleLiteral or TemplateTailLiteral.
    export interface TemplateSpan extends Node {
        kind: SyntaxKind.TemplateSpan;
        parent?: TemplateExpression;
        expression: Expression;
        literal: TemplateMiddle | TemplateTail;
    }

    export interface ParenthesizedExpression extends PrimaryExpression {
        kind: SyntaxKind.ParenthesizedExpression;
        expression: Expression;
    }

    export interface ArrayLiteralExpression extends PrimaryExpression {
        kind: SyntaxKind.ArrayLiteralExpression;
        elements: NodeArray<Expression>;
        /* @internal */
        multiLine?: boolean;
    }

    export interface SpreadElement extends Expression {
        kind: SyntaxKind.SpreadElement;
        expression: Expression;
    }

    /**
     * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
     * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
     * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
     * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
     */
    export interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
        properties: NodeArray<T>;
    }

    // An ObjectLiteralExpression is the declaration node for an anonymous symbol.
    export interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike> {
        kind: SyntaxKind.ObjectLiteralExpression;
        /* @internal */
        multiLine?: boolean;
    }

    export type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression | ParenthesizedExpression;
    export type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;

    export interface PropertyAccessExpression extends MemberExpression, NamedDeclaration {
        kind: SyntaxKind.PropertyAccessExpression;
        expression: LeftHandSideExpression;
        name: Identifier;
    }

    export interface SuperPropertyAccessExpression extends PropertyAccessExpression {
        expression: SuperExpression;
    }

    /** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
    export interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
        _propertyAccessExpressionLikeQualifiedNameBrand?: any;
        expression: EntityNameExpression;
    }

    export interface ElementAccessExpression extends MemberExpression {
        kind: SyntaxKind.ElementAccessExpression;
        expression: LeftHandSideExpression;
        argumentExpression?: Expression;
    }

    export interface SuperElementAccessExpression extends ElementAccessExpression {
        expression: SuperExpression;
    }

    // see: https://tc39.github.io/ecma262/#prod-SuperProperty
    export type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;

    export interface CallExpression extends LeftHandSideExpression, Declaration {
        kind: SyntaxKind.CallExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }

    // see: https://tc39.github.io/ecma262/#prod-SuperCall
    export interface SuperCall extends CallExpression {
        expression: SuperExpression;
    }

    export interface ImportCall extends CallExpression {
        expression: ImportExpression;
    }

    export interface ExpressionWithTypeArguments extends TypeNode {
        kind: SyntaxKind.ExpressionWithTypeArguments;
        parent?: HeritageClause;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
    }

    export interface NewExpression extends PrimaryExpression, Declaration {
        kind: SyntaxKind.NewExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments?: NodeArray<Expression>;
    }

    export interface TaggedTemplateExpression extends MemberExpression {
        kind: SyntaxKind.TaggedTemplateExpression;
        tag: LeftHandSideExpression;
        template: TemplateLiteral;
    }

    export type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxOpeningLikeElement;

    export interface AsExpression extends Expression {
        kind: SyntaxKind.AsExpression;
        expression: Expression;
        type: TypeNode;
    }

    export interface TypeAssertion extends UnaryExpression {
        kind: SyntaxKind.TypeAssertionExpression;
        type: TypeNode;
        expression: UnaryExpression;
    }

    export type AssertionExpression = TypeAssertion | AsExpression;

    export interface NonNullExpression extends LeftHandSideExpression {
        kind: SyntaxKind.NonNullExpression;
        expression: Expression;
    }

    // NOTE: MetaProperty is really a MemberExpression, but we consider it a PrimaryExpression
    //       for the same reasons we treat NewExpression as a PrimaryExpression.
    export interface MetaProperty extends PrimaryExpression {
        kind: SyntaxKind.MetaProperty;
        keywordToken: SyntaxKind.NewKeyword;
        name: Identifier;
    }

    /// A JSX expression of the form <TagName attrs>...</TagName>
    export interface JsxElement extends PrimaryExpression {
        kind: SyntaxKind.JsxElement;
        openingElement: JsxOpeningElement;
        children: NodeArray<JsxChild>;
        closingElement: JsxClosingElement;
    }

    /// Either the opening tag in a <Tag>...</Tag> pair, or the lone <Tag /> in a self-closing form
    export type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;

    export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;

    export type JsxTagNameExpression = PrimaryExpression | PropertyAccessExpression;

    export interface JsxAttributes extends ObjectLiteralExpressionBase<JsxAttributeLike> {
        parent?: JsxOpeningLikeElement;
    }

    /// The opening element of a <Tag>...</Tag> JsxElement
    export interface JsxOpeningElement extends Expression {
        kind: SyntaxKind.JsxOpeningElement;
        parent?: JsxElement;
        tagName: JsxTagNameExpression;
        attributes: JsxAttributes;
    }

    /// A JSX expression of the form <TagName attrs />
    export interface JsxSelfClosingElement extends PrimaryExpression {
        kind: SyntaxKind.JsxSelfClosingElement;
        tagName: JsxTagNameExpression;
        attributes: JsxAttributes;
    }

    export interface JsxAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxAttribute;
        parent?: JsxAttributes;
        name: Identifier;
        /// JSX attribute initializers are optional; <X y /> is sugar for <X y={true} />
        initializer?: StringLiteral | JsxExpression;
    }

    export interface JsxSpreadAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxSpreadAttribute;
        parent?: JsxAttributes;
        expression: Expression;
    }

    export interface JsxClosingElement extends Node {
        kind: SyntaxKind.JsxClosingElement;
        parent?: JsxElement;
        tagName: JsxTagNameExpression;
    }

    export interface JsxExpression extends Expression {
        kind: SyntaxKind.JsxExpression;
        parent?: JsxElement | JsxAttributeLike;
        dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
        expression?: Expression;
    }

    export interface JsxText extends Node {
        kind: SyntaxKind.JsxText;
        containsOnlyWhiteSpaces: boolean;
        parent?: JsxElement;
    }

    export type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement;

    export interface Statement extends Node {
        _statementBrand: any;
    }

    // Represents a statement that is elided as part of a transformation to emit comments on a
    // not-emitted node.
    export interface NotEmittedStatement extends Statement {
        kind: SyntaxKind.NotEmittedStatement;
    }

    /**
     * Marks the end of transformed declaration to properly emit exports.
     */
    /* @internal */
    export interface EndOfDeclarationMarker extends Statement {
        kind: SyntaxKind.EndOfDeclarationMarker;
    }

    /**
     * A list of comma-seperated expressions. This node is only created by transformations.
     */
    export interface CommaListExpression extends Expression {
        kind: SyntaxKind.CommaListExpression;
        elements: NodeArray<Expression>;
    }

    /**
     * Marks the beginning of a merged transformed declaration.
     */
    /* @internal */
    export interface MergeDeclarationMarker extends Statement {
        kind: SyntaxKind.MergeDeclarationMarker;
    }

    export interface EmptyStatement extends Statement {
        kind: SyntaxKind.EmptyStatement;
    }

    export interface DebuggerStatement extends Statement {
        kind: SyntaxKind.DebuggerStatement;
    }

    export interface MissingDeclaration extends DeclarationStatement, ClassElement, ObjectLiteralElement, TypeElement {
        kind: SyntaxKind.MissingDeclaration;
        name?: Identifier;
    }

    export type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;

    export interface Block extends Statement {
        kind: SyntaxKind.Block;
        statements: NodeArray<Statement>;
        /*@internal*/ multiLine?: boolean;
    }

    export interface VariableStatement extends Statement {
        kind: SyntaxKind.VariableStatement;
        declarationList: VariableDeclarationList;
    }

    export interface ExpressionStatement extends Statement {
        kind: SyntaxKind.ExpressionStatement;
        expression: Expression;
    }

    /* @internal */
    export interface PrologueDirective extends ExpressionStatement {
        expression: StringLiteral;
    }

    export interface IfStatement extends Statement {
        kind: SyntaxKind.IfStatement;
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }

    export interface IterationStatement extends Statement {
        statement: Statement;
    }

    export interface DoStatement extends IterationStatement {
        kind: SyntaxKind.DoStatement;
        expression: Expression;
    }

    export interface WhileStatement extends IterationStatement {
        kind: SyntaxKind.WhileStatement;
        expression: Expression;
    }

    export type ForInitializer = VariableDeclarationList | Expression;

    export interface ForStatement extends IterationStatement {
        kind: SyntaxKind.ForStatement;
        initializer?: ForInitializer;
        condition?: Expression;
        incrementor?: Expression;
    }

    export type ForInOrOfStatement = ForInStatement | ForOfStatement;

    export interface ForInStatement extends IterationStatement {
        kind: SyntaxKind.ForInStatement;
        initializer: ForInitializer;
        expression: Expression;
    }

    export interface ForOfStatement extends IterationStatement {
        kind: SyntaxKind.ForOfStatement;
        awaitModifier?: AwaitKeywordToken;
        initializer: ForInitializer;
        expression: Expression;
    }

    export interface BreakStatement extends Statement {
        kind: SyntaxKind.BreakStatement;
        label?: Identifier;
    }

    export interface ContinueStatement extends Statement {
        kind: SyntaxKind.ContinueStatement;
        label?: Identifier;
    }

    export type BreakOrContinueStatement = BreakStatement | ContinueStatement;

    export interface ReturnStatement extends Statement {
        kind: SyntaxKind.ReturnStatement;
        expression?: Expression;
    }

    export interface WithStatement extends Statement {
        kind: SyntaxKind.WithStatement;
        expression: Expression;
        statement: Statement;
    }

    export interface SwitchStatement extends Statement {
        kind: SyntaxKind.SwitchStatement;
        expression: Expression;
        caseBlock: CaseBlock;
        possiblyExhaustive?: boolean;
    }

    export interface CaseBlock extends Node {
        kind: SyntaxKind.CaseBlock;
        parent?: SwitchStatement;
        clauses: NodeArray<CaseOrDefaultClause>;
    }

    export interface CaseClause extends Node {
        kind: SyntaxKind.CaseClause;
        parent?: CaseBlock;
        expression: Expression;
        statements: NodeArray<Statement>;
    }

    export interface DefaultClause extends Node {
        kind: SyntaxKind.DefaultClause;
        parent?: CaseBlock;
        statements: NodeArray<Statement>;
    }

    export type CaseOrDefaultClause = CaseClause | DefaultClause;

    export interface LabeledStatement extends Statement {
        kind: SyntaxKind.LabeledStatement;
        label: Identifier;
        statement: Statement;
    }

    export interface ThrowStatement extends Statement {
        kind: SyntaxKind.ThrowStatement;
        expression: Expression;
    }

    export interface TryStatement extends Statement {
        kind: SyntaxKind.TryStatement;
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }

    export interface CatchClause extends Node {
        kind: SyntaxKind.CatchClause;
        parent?: TryStatement;
        variableDeclaration: VariableDeclaration;
        block: Block;
    }

    export type DeclarationWithTypeParameters = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | JSDocTemplateTag;

    export interface ClassLikeDeclaration extends NamedDeclaration {
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }

    export interface ClassDeclaration extends ClassLikeDeclaration, DeclarationStatement {
        kind: SyntaxKind.ClassDeclaration;
        name?: Identifier;
    }

    export interface ClassExpression extends ClassLikeDeclaration, PrimaryExpression {
        kind: SyntaxKind.ClassExpression;
    }

    export interface ClassElement extends NamedDeclaration {
        _classElementBrand: any;
        name?: PropertyName;
    }

    export interface TypeElement extends NamedDeclaration {
        _typeElementBrand: any;
        name?: PropertyName;
        questionToken?: QuestionToken;
    }

    export interface InterfaceDeclaration extends DeclarationStatement {
        kind: SyntaxKind.InterfaceDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<TypeElement>;
    }

    export interface HeritageClause extends Node {
        kind: SyntaxKind.HeritageClause;
        parent?: InterfaceDeclaration | ClassDeclaration | ClassExpression;
        token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
        types: NodeArray<ExpressionWithTypeArguments>;
    }

    export interface TypeAliasDeclaration extends DeclarationStatement {
        kind: SyntaxKind.TypeAliasDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        type: TypeNode;
    }

    export interface EnumMember extends NamedDeclaration {
        kind: SyntaxKind.EnumMember;
        parent?: EnumDeclaration;
        // This does include ComputedPropertyName, but the parser will give an error
        // if it parses a ComputedPropertyName in an EnumMember
        name: PropertyName;
        initializer?: Expression;
    }

    export interface EnumDeclaration extends DeclarationStatement {
        kind: SyntaxKind.EnumDeclaration;
        name: Identifier;
        members: NodeArray<EnumMember>;
    }

    export type ModuleName = Identifier | StringLiteral;

    export type ModuleBody = NamespaceBody | JSDocNamespaceBody;

    export interface ModuleDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ModuleDeclaration;
        parent?: ModuleBody | SourceFile;
        name: ModuleName;
        body?: ModuleBody | JSDocNamespaceDeclaration;
    }

    export type NamespaceBody = ModuleBlock | NamespaceDeclaration;

    export interface NamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: NamespaceBody;
    }

    export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;

    export interface JSDocNamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: JSDocNamespaceBody;
    }

    export interface ModuleBlock extends Node, Statement {
        kind: SyntaxKind.ModuleBlock;
        parent?: ModuleDeclaration;
        statements: NodeArray<Statement>;
    }

    export type ModuleReference = EntityName | ExternalModuleReference;

    /**
     * One of:
     * - import x = require("mod");
     * - import x = M.x;
     */
    export interface ImportEqualsDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ImportEqualsDeclaration;
        parent?: SourceFile | ModuleBlock;
        name: Identifier;

        // 'EntityName' for an internal module reference, 'ExternalModuleReference' for an external
        // module reference.
        moduleReference: ModuleReference;
    }

    export interface ExternalModuleReference extends Node {
        kind: SyntaxKind.ExternalModuleReference;
        parent?: ImportEqualsDeclaration;
        expression?: Expression;
    }

    // In case of:
    // import "mod"  => importClause = undefined, moduleSpecifier = "mod"
    // In rest of the cases, module specifier is string literal corresponding to module
    // ImportClause information is shown at its declaration below.
    export interface ImportDeclaration extends Statement {
        kind: SyntaxKind.ImportDeclaration;
        parent?: SourceFile | ModuleBlock;
        importClause?: ImportClause;
        /** If this is not a StringLiteral it will be a grammar error. */
        moduleSpecifier: Expression;
    }

    export type NamedImportBindings = NamespaceImport | NamedImports;

    // In case of:
    // import d from "mod" => name = d, namedBinding = undefined
    // import * as ns from "mod" => name = undefined, namedBinding: NamespaceImport = { name: ns }
    // import d, * as ns from "mod" => name = d, namedBinding: NamespaceImport = { name: ns }
    // import { a, b as x } from "mod" => name = undefined, namedBinding: NamedImports = { elements: [{ name: a }, { name: x, propertyName: b}]}
    // import d, { a, b as x } from "mod" => name = d, namedBinding: NamedImports = { elements: [{ name: a }, { name: x, propertyName: b}]}
    export interface ImportClause extends NamedDeclaration {
        kind: SyntaxKind.ImportClause;
        parent?: ImportDeclaration;
        name?: Identifier; // Default binding
        namedBindings?: NamedImportBindings;
    }

    export interface NamespaceImport extends NamedDeclaration {
        kind: SyntaxKind.NamespaceImport;
        parent?: ImportClause;
        name: Identifier;
    }

    export interface NamespaceExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.NamespaceExportDeclaration;
        name: Identifier;
    }

    export interface ExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ExportDeclaration;
        parent?: SourceFile | ModuleBlock;
        exportClause?: NamedExports;
        /** If this is not a StringLiteral it will be a grammar error. */
        moduleSpecifier?: Expression;
    }

    export interface NamedImports extends Node {
        kind: SyntaxKind.NamedImports;
        parent?: ImportClause;
        elements: NodeArray<ImportSpecifier>;
    }

    export interface NamedExports extends Node {
        kind: SyntaxKind.NamedExports;
        parent?: ExportDeclaration;
        elements: NodeArray<ExportSpecifier>;
    }

    export type NamedImportsOrExports = NamedImports | NamedExports;

    export interface ImportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ImportSpecifier;
        parent?: NamedImports;
        propertyName?: Identifier;  // Name preceding "as" keyword (or undefined when "as" is absent)
        name: Identifier;           // Declared name
    }

    export interface ExportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ExportSpecifier;
        parent?: NamedExports;
        propertyName?: Identifier;  // Name preceding "as" keyword (or undefined when "as" is absent)
        name: Identifier;           // Declared name
    }

    export type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;

    export interface ExportAssignment extends DeclarationStatement {
        kind: SyntaxKind.ExportAssignment;
        parent?: SourceFile;
        isExportEquals?: boolean;
        expression: Expression;
    }

    export interface FileReference extends TextRange {
        fileName: string;
    }

    export interface CheckJsDirective extends TextRange {
        enabled: boolean;
    }

    export type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;

    export interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: CommentKind;
    }

    export interface SynthesizedComment extends CommentRange {
        text: string;
        pos: -1;
        end: -1;
    }

    // represents a top level: { type } expression in a JSDoc comment.
    export interface JSDocTypeExpression extends Node {
        kind: SyntaxKind.JSDocTypeExpression;
        type: TypeNode;
    }

    export interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }

    export interface JSDocAllType extends JSDocType {
        kind: SyntaxKind.JSDocAllType;
    }

    export interface JSDocUnknownType extends JSDocType {
        kind: SyntaxKind.JSDocUnknownType;
    }

    export interface JSDocNonNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNonNullableType;
        type: TypeNode;
    }

    export interface JSDocNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNullableType;
        type: TypeNode;
    }

    export interface JSDocOptionalType extends JSDocType {
        kind: SyntaxKind.JSDocOptionalType;
        type: TypeNode;
    }

    export interface JSDocFunctionType extends JSDocType, SignatureDeclaration {
        kind: SyntaxKind.JSDocFunctionType;
    }

    export interface JSDocVariadicType extends JSDocType {
        kind: SyntaxKind.JSDocVariadicType;
        type: TypeNode;
    }

    export type JSDocTypeReferencingNode = JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;

    export interface JSDoc extends Node {
        kind: SyntaxKind.JSDocComment;
        tags: NodeArray<JSDocTag> | undefined;
        comment: string | undefined;
    }

    export interface JSDocTag extends Node {
        parent: JSDoc;
        atToken: AtToken;
        tagName: Identifier;
        comment: string | undefined;
    }

    export interface JSDocUnknownTag extends JSDocTag {
        kind: SyntaxKind.JSDocTag;
    }

    export interface JSDocAugmentsTag extends JSDocTag {
        kind: SyntaxKind.JSDocAugmentsTag;
        typeExpression: JSDocTypeExpression;
    }

    export interface JSDocClassTag extends JSDocTag {
        kind: SyntaxKind.JSDocClassTag;
    }

    export interface JSDocTemplateTag extends JSDocTag {
        kind: SyntaxKind.JSDocTemplateTag;
        typeParameters: NodeArray<TypeParameterDeclaration>;
    }

    export interface JSDocReturnTag extends JSDocTag {
        kind: SyntaxKind.JSDocReturnTag;
        typeExpression: JSDocTypeExpression;
    }

    export interface JSDocTypeTag extends JSDocTag {
        kind: SyntaxKind.JSDocTypeTag;
        typeExpression: JSDocTypeExpression;
    }

    export interface JSDocTypedefTag extends JSDocTag, NamedDeclaration {
        parent: JSDoc;
        kind: SyntaxKind.JSDocTypedefTag;
        fullName?: JSDocNamespaceDeclaration | Identifier;
        name?: Identifier;
        typeExpression?: JSDocTypeExpression;
        jsDocTypeLiteral?: JSDocTypeLiteral;
    }

    export interface JSDocPropertyTag extends JSDocTag, TypeElement {
        parent: JSDoc;
        kind: SyntaxKind.JSDocPropertyTag;
        name: Identifier;
        /** the parameter name, if provided *before* the type (TypeScript-style) */
        preParameterName?: Identifier;
        /** the parameter name, if provided *after* the type (JSDoc-standard) */
        postParameterName?: Identifier;
        typeExpression: JSDocTypeExpression;
        isBracketed: boolean;
    }

    export interface JSDocTypeLiteral extends JSDocType {
        kind: SyntaxKind.JSDocTypeLiteral;
        jsDocPropertyTags?: NodeArray<JSDocPropertyTag>;
        jsDocTypeTag?: JSDocTypeTag;
    }

    export interface JSDocParameterTag extends JSDocTag {
        kind: SyntaxKind.JSDocParameterTag;
        /** the parameter name, if provided *before* the type (TypeScript-style) */
        preParameterName?: Identifier;
        typeExpression?: JSDocTypeExpression;
        /** the parameter name, if provided *after* the type (JSDoc-standard) */
        postParameterName?: Identifier;
        /** the parameter name, regardless of the location it was provided */
        name: Identifier;
        isBracketed: boolean;
    }

    export const enum FlowFlags {
        Unreachable = 1 << 0,  // Unreachable code
        Start = 1 << 1,  // Start of flow graph
        BranchLabel = 1 << 2,  // Non-looping junction
        LoopLabel = 1 << 3,  // Looping junction
        Assignment = 1 << 4,  // Assignment
        TrueCondition = 1 << 5,  // Condition known to be true
        FalseCondition = 1 << 6,  // Condition known to be false
        SwitchClause = 1 << 7,  // Switch statement clause
        ArrayMutation = 1 << 8,  // Potential array mutation
        Referenced = 1 << 9,  // Referenced as antecedent once
        Shared = 1 << 10, // Referenced as antecedent more than once
        PreFinally = 1 << 11, // Injected edge that links pre-finally label and pre-try flow
        AfterFinally = 1 << 12, // Injected edge that links post-finally flow with the rest of the graph
        Label = BranchLabel | LoopLabel,
        Condition = TrueCondition | FalseCondition
    }

    export interface FlowLock {
        locked?: boolean;
    }

    export interface AfterFinallyFlow extends FlowNode, FlowLock {
        antecedent: FlowNode;
    }

    export interface PreFinallyFlow extends FlowNode {
        antecedent: FlowNode;
        lock: FlowLock;
    }

    export interface FlowNode {
        flags: FlowFlags;
        id?: number;     // Node id used by flow type cache in checker
    }

    // FlowStart represents the start of a control flow. For a function expression or arrow
    // function, the container property references the function (which in turn has a flowNode
    // property for the containing control flow).
    export interface FlowStart extends FlowNode {
        container?: FunctionExpression | ArrowFunction | MethodDeclaration;
    }

    // FlowLabel represents a junction with multiple possible preceding control flows.
    export interface FlowLabel extends FlowNode {
        antecedents: FlowNode[];
    }

    // FlowAssignment represents a node that assigns a value to a narrowable reference,
    // i.e. an identifier or a dotted name that starts with an identifier or 'this'.
    export interface FlowAssignment extends FlowNode {
        node: Expression | VariableDeclaration | BindingElement;
        antecedent: FlowNode;
    }

    // FlowCondition represents a condition that is known to be true or false at the
    // node's location in the control flow.
    export interface FlowCondition extends FlowNode {
        expression: Expression;
        antecedent: FlowNode;
    }

    export interface FlowSwitchClause extends FlowNode {
        switchStatement: SwitchStatement;
        clauseStart: number;   // Start index of case/default clause range
        clauseEnd: number;     // End index of case/default clause range
        antecedent: FlowNode;
    }

    // FlowArrayMutation represents a node potentially mutates an array, i.e. an
    // operation of the form 'x.push(value)', 'x.unshift(value)' or 'x[n] = value'.
    export interface FlowArrayMutation extends FlowNode {
        node: CallExpression | BinaryExpression;
        antecedent: FlowNode;
    }

    export type FlowType = Type | IncompleteType;

    // Incomplete types occur during control flow analysis of loops. An IncompleteType
    // is distinguished from a regular type by a flags value of zero. Incomplete type
    // objects are internal to the getFlowTypeOfRefecence function and never escape it.
    export interface IncompleteType {
        flags: TypeFlags;  // No flags set
        type: Type;        // The type marked incomplete
    }

    export interface AmdDependency {
        path: string;
        name: string;
    }

    /* @internal */
    /**
     * Subset of properties from SourceFile that are used in multiple utility functions
     */
    export interface SourceFileLike {
        readonly text: string;
        lineMap: number[];
    }


    // Source files are declarations when they are external modules.
    export interface SourceFile extends Declaration {
        kind: SyntaxKind.SourceFile;
        statements: NodeArray<Statement>;
        endOfFileToken: Token<SyntaxKind.EndOfFileToken>;

        fileName: string;
        /* @internal */ path: Path;
        text: string;
        词典语句?: UnderscoreEscapedMap<全局词典语句>;
        amdDependencies: AmdDependency[];
        moduleName: string;
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        languageVariant: LanguageVariant;
        isDeclarationFile: boolean;

        // this map is used by transpiler to supply alternative names for dependencies (i.e. in case of bundling)
        /* @internal */
        renamedDependencies?: Map<string>;

        /**
         * lib.d.ts should have a reference comment like
         *
         *  /// <reference no-default-lib="true"/>
         *
         * If any other file has this comment, it signals not to include lib.d.ts
         * because this containing file is intended to act as a default library.
         */
        hasNoDefaultLib: boolean;

        languageVersion: ScriptTarget;
        /* @internal */ scriptKind: ScriptKind;

        文件种类?: 文件种类;
        // The first node that causes this file to be an external module
        /* @internal */ externalModuleIndicator: Node;
        // The first node that causes this file to be a CommonJS module
        /* @internal */ commonJsModuleIndicator: Node;

        /* @internal */ identifiers: Map<string>; // Map from a string to an interned string
        /* @internal */ nodeCount: number;
        /* @internal */ identifierCount: number;
        /* @internal */ symbolCount: number;

        // File-level diagnostics reported by the parser (includes diagnostics about /// references
        // as well as code diagnostics).
        /* @internal */ parseDiagnostics: Diagnostic[];

        // File-level diagnostics reported by the binder.
        /* @internal */ bindDiagnostics: Diagnostic[];

        // File-level JSDoc diagnostics reported by the JSDoc parser
        /* @internal */ jsDocDiagnostics?: Diagnostic[];

        // Stores additional file-level diagnostics reported by the program
        /* @internal */ additionalSyntacticDiagnostics?: Diagnostic[];

        // Stores a line map for the file.
        // This field should never be used directly to obtain line map, use getLineMap function instead.
        /* @internal */ lineMap: number[];
        /* @internal */ classifiableNames?: UnderscoreEscapedMap<true>;
        // Stores a mapping 'external module reference text' -> 'resolved file name' | undefined
        // It is used to resolve module names in the checker.
        // Content of this field should never be used directly - use getResolvedModuleFileName/setResolvedModuleFileName functions instead
        /* @internal */ resolvedModules: Map<ResolvedModuleFull>;
        /* @internal */ resolvedTypeReferenceDirectiveNames: Map<ResolvedTypeReferenceDirective>;
        /* @internal */ imports: StringLiteral[];
        /* @internal */ moduleAugmentations: StringLiteral[];
        /* @internal */ patternAmbientModules?: PatternAmbientModule[];
        /* @internal */ ambientModuleNames: string[];
        /* @internal */ checkJsDirective: CheckJsDirective | undefined;
    }

    export interface Bundle extends Node {
        kind: SyntaxKind.Bundle;
        sourceFiles: SourceFile[];
    }

    export interface JsonSourceFile extends SourceFile {
        jsonObject?: ObjectLiteralExpression;
        extendedSourceFiles?: string[];
    }

    export interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile;
        getSourceFileByPath(path: Path): SourceFile;
        getCurrentDirectory(): string;
    }

    export interface ParseConfigHost {
        useCaseSensitiveFileNames: boolean;

        readDirectory(rootDir: string, extensions: ReadonlyArray<string>, excludes: ReadonlyArray<string>, includes: ReadonlyArray<string>, depth: number): string[];

        /**
         * Gets a value indicating whether the specified path exists and is a file.
         * @param path The path to test.
         */
        fileExists(path: string): boolean;

        readFile(path: string): string | undefined;
    }

    export interface WriteFileCallback {
        (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: SourceFile[]): void;
    }

    export class OperationCanceledException { }

    export interface CancellationToken {
        isCancellationRequested(): boolean;

        /** @throws OperationCanceledException if isCancellationRequested is true */
        throwIfCancellationRequested(): void;
    }

    export interface Program extends ScriptReferenceHost {

        /**
         * Get a list of root file names that were passed to a 'createProgram'
         */
        getRootFileNames(): string[];

        /**
         * Get a list of files in the program
         */
        getSourceFiles(): SourceFile[];

        /**
         * Get a list of file names that were passed to 'createProgram' or referenced in a
         * program source file but could not be located.
         */
        /* @internal */
        getMissingFilePaths(): Path[];

        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;

        getOptionsDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];

        /**
         * Gets a type checker that can be used to semantically analyze source fils in the program.
         */
        getTypeChecker(): TypeChecker;

        /* @internal */ getCommonSourceDirectory(): string;

        // For testing purposes only.  Should not be used by any other consumers (including the
        // language service).
        /* @internal */ getDiagnosticsProducingTypeChecker(): TypeChecker;
        /* @internal */ dropDiagnosticsProducingTypeChecker(): void;

        /* @internal */ getClassifiableNames(): UnderscoreEscapedMap<true>;

        /* @internal */ getNodeCount(): number;
        /* @internal */ getIdentifierCount(): number;
        /* @internal */ getSymbolCount(): number;
        /* @internal */ getTypeCount(): number;

        /* @internal */ getFileProcessingDiagnostics(): DiagnosticCollection;
        /* @internal */ getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective>;
        /* @internal */ isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        // For testing purposes only.
        /* @internal */ structureIsReused?: StructureIsReused;

        /* @internal */ getSourceFileFromReference(referencingFile: SourceFile, ref: FileReference): SourceFile | undefined;
    }

    /* @internal */
    export const enum StructureIsReused {
        Not = 0,
        SafeModules = 1 << 0,
        Completely = 1 << 1,
    }

    export interface CustomTransformers {
        /** Custom transformers to evaluate before built-in transformations. */
        before?: TransformerFactory<SourceFile>[];
        /** Custom transformers to evaluate after built-in transformations. */
        after?: TransformerFactory<SourceFile>[];
    }

    export interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }

    export interface SourceMapData {
        sourceMapFilePath: string;           // Where the sourcemap file is written
        jsSourceMappingURL: string;          // source map URL written in the .js file
        sourceMapFile: string;               // Source map's file field - .js file name
        sourceMapSourceRoot: string;         // Source map's sourceRoot field - location where the sources will be present if not ""
        sourceMapSources: string[];          // Source map's sources field - list of sources that can be indexed in this source map
        sourceMapSourcesContent?: string[];  // Source map's sourcesContent field - list of the sources' text to be embedded in the source map
        inputSourceFileNames: string[];      // Input source file (which one can use on program to get the file), 1:1 mapping with the sourceMapSources list
        sourceMapNames?: string[];           // Source map's names field - list of names that can be indexed in this source map
        sourceMapMappings: string;           // Source map's mapping field - encoded source map spans
        sourceMapDecodedMappings: SourceMapSpan[];  // Raw source map spans that were encoded into the sourceMapMappings
    }

    /** Return code used by getEmitOutput function to indicate status of the function */
    export enum ExitStatus {
        // Compiler ran successfully.  Either this was a simple do-nothing compilation (for example,
        // when -version or -help was provided, or this was a normal compilation, no diagnostics
        // were produced, and all outputs were generated successfully.
        Success = 0,

        // Diagnostics were produced and because of them no code was generated.
        DiagnosticsPresent_OutputsSkipped = 1,

        // Diagnostics were produced and outputs were generated in spite of them.
        DiagnosticsPresent_OutputsGenerated = 2,
    }

    export interface EmitResult {
        emitSkipped: boolean;
        /** Contains declaration emit diagnostics */
        diagnostics: Diagnostic[];
        emittedFiles: string[]; // Array of files the compiler wrote to disk
        /* @internal */ sourceMaps: SourceMapData[];  // Array of sourceMapData if compiler emitted sourcemaps
    }

    /* @internal */
    export interface TypeCheckerHost {
        getCompilerOptions(): CompilerOptions;

        getSourceFiles(): SourceFile[];
        getSourceFile(fileName: string): SourceFile;
        getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective>;
    }

    export interface TypeChecker {
        /** 取类型按符号位置 */
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        /** 取声明类型从符号 */
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        /** 取类型的属性集 */
        getPropertiesOfType(type: Type): Symbol[];
        /** 取类型的属性 */
        getPropertyOfType(type: Type, propertyName: string): Symbol | undefined;
        /** 取类型的索引信息 */
        getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | undefined;
        /** 取类型的签名 */
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        /** 取类型的索引类型 */
        getIndexTypeOfType(type: Type, kind: IndexKind): Type | undefined;
        /** 取基类型 */
        getBaseTypes(type: InterfaceType): BaseType[];
        /** 取字面量类型的基类型 */
        getBaseTypeOfLiteralType(type: Type): Type;
        /** 取加宽类型 */
        getWidenedType(type: Type): Type;
        /** 取签名的返回类型 */
        getReturnTypeOfSignature(signature: Signature): Type;
        /**
         * Gets the type of a parameter at a given position in a signature.
         * Returns `any` if the index is not valid.
         */             /** 取参数类型 */
        /* @internal */ getParameterType(signature: Signature, parameterIndex: number): Type;
        /** 取非可空类型 */
        getNonNullableType(type: Type): Type;

        /** 请注意，导致节点不能被检查。 */
        /** 类型转为类型节点 */
        typeToTypeNode(type: Type, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): TypeNode;
        /** 请注意，导致节点不能被检查。 */
        /** 签名转为签名声明 */
        signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): SignatureDeclaration;
        /** 请注意，导致节点不能被检查。 */
        /** 索引信息转为索引签名声明 */
        indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): IndexSignatureDeclaration;
        /** 取范围内的符号 */
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        /** 取符号按位置 */
        getSymbolAtLocation(node: Node): Symbol | undefined;
        /** 取参数属性声明的符号 */
        getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
        /** 取速记值赋值符号 */
        getShorthandAssignmentValueSymbol(location: Node): Symbol | undefined;
        /** 取出口说明符局部目标符号 */
        getExportSpecifierLocalTargetSymbol(location: ExportSpecifier): Symbol | undefined;
        /** 取解构分配财产的特征 */
        getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol | undefined;
        /** 取位置按位置 */
        getTypeAtLocation(node: Node): Type;
        /** 取类型从类型节点 */
        getTypeFromTypeNode(node: TypeNode): Type;
        /** 签名转为文字 */
        signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
        /** 类型转为文字 */
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        /** 符号转为文字 */
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        /** 取符号显示构建 */
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        /** 取完全限定名 */
        getFullyQualifiedName(symbol: Symbol): string;
        /** 取类型的增强属性类型 */
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        /** 取根符号集 */
        getRootSymbols(symbol: Symbol): Symbol[];
        /** 取语境类型 */
        getContextualType(node: Expression): Type | undefined;
        /**
         * returns unknownSignature in the case of an error. Don't know when it returns undefined.
         * @param argumentCount Apparent number of arguments, passed in case of a possibly incomplete call. This should come from an ArgumentListInfo. See `signatureHelp.ts`.
         */
        /** 取解决的签名 */
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
        /** 取签名从声明 */
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature | undefined;
        /** 是重载的实现 */
        isImplementationOfOverload(node: FunctionLike): boolean | undefined;
        /** 是未定义符号 */
        isUndefinedSymbol(symbol: Symbol): boolean;
        /** 是增强参数符号 */
        isArgumentsSymbol(symbol: Symbol): boolean;
        /** 是未知符号 */
        isUnknownSymbol(symbol: Symbol): boolean;
        /** 取合并符号 */
        /* @internal */ getMergedSymbol(symbol: Symbol): Symbol;
        /** 取常量值 */
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
        /** 是有效的属性访问 */
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean;
        /** Follow all aliases to get the original symbol. */
        /** 取别名符号 */
        getAliasedSymbol(symbol: Symbol): Symbol;
        /** Follow a *single* alias to get the immediately aliased symbol. */
        /** 取直接的别名符号 */
        /* @internal */ getImmediateAliasedSymbol(symbol: Symbol): Symbol;
        /** 取模块的出口 */
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        /** Unlike `getExportsOfModule`, this includes properties of an `export =` value. */
        /** 取模块的出口集属性 */
        /* @internal */ getExportsAndPropertiesOfModule(moduleSymbol: Symbol): Symbol[];
        /** 取所有的属性类型从JSX开放像元素 */
        getAllAttributesTypeFromJsxOpeningLikeElement(elementNode: JsxOpeningLikeElement): Type | undefined;
        /** 取JSX内在标签名称 */
        getJsxIntrinsicTagNames(): Symbol[];
        /** 是可选参数 */
        isOptionalParameter(node: ParameterDeclaration): boolean;
        /** 取AMB模块集 */
        getAmbientModules(): Symbol[];
        /** 尝试取模块出口的成员 */

        tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        /** 取明显类型 */
        getApparentType(type: Type): Type;
        /** 取不存在的属性建议 */
        getSuggestionForNonexistentProperty(node: Identifier, containingType: Type): string | undefined;
        /** 取不存在的符号建议 */
        getSuggestionForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): string | undefined;
        /** 获取类型的基约束 */
        /* @internal */ getBaseConstraintOfType(type: Type): Type | undefined;
        /** 尝试找到环境模块没有增强参数 */

        /* @internal */ tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol | undefined;

        // Should not be called directly.  Should only be accessed through the Program instance.
        /* @internal */ getDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        /* @internal */ getGlobalDiagnostics(): Diagnostic[];
        /* @internal */ getEmitResolver(sourceFile?: SourceFile, cancellationToken?: CancellationToken): EmitResolver;

        /* @internal */ getNodeCount(): number;
        /* @internal */ getIdentifierCount(): number;
        /* @internal */ getSymbolCount(): number;
        /* @internal */ getTypeCount(): number;

        /**
         * For a union, will include a property if it's defined in *any* of the member types.
         * So for `{ a } | { b }`, this will include both `a` and `b`.
         * Does not include properties of primitive types.
         */
        /** 获取类型的所有可能属性 */
        /* @internal */ getAllPossiblePropertiesOfType(type: Type): Symbol[];

        /* @internal */ getJsxNamespace(): string;
        /** 解析名称在位置 */
        /* @internal */ resolveNameAtLocation(location: Node, name: string, meaning: SymbolFlags): Symbol | undefined;
    }

    export enum NodeBuilderFlags {
        None = 0,
        // Options
        NoTruncation = 1 << 0,   // Don't truncate result
        WriteArrayAsGenericType = 1 << 1,   // Write Array<T> instead T[]
        WriteTypeArgumentsOfSignature = 1 << 5,   // Write the type arguments instead of type parameters of the signature
        UseFullyQualifiedType = 1 << 6,   // Write out the fully qualified type name (eg. Module.Type, instead of Type)
        SuppressAnyReturnType = 1 << 8,   // If the return type is any-like, don't offer a return type.
        WriteTypeParametersInQualifiedName = 1 << 9,

        // Error handling
        AllowThisInObjectLiteral = 1 << 10,
        AllowQualifedNameInPlaceOfIdentifier = 1 << 11,
        AllowAnonymousIdentifier = 1 << 13,
        AllowEmptyUnionOrIntersection = 1 << 14,
        AllowEmptyTuple = 1 << 15,

        IgnoreErrors = AllowThisInObjectLiteral | AllowQualifedNameInPlaceOfIdentifier | AllowAnonymousIdentifier | AllowEmptyUnionOrIntersection | AllowEmptyTuple,

        // State
        InObjectTypeLiteral = 1 << 20,
        InTypeAlias = 1 << 23,    // Writing type in type alias declaration
    }

    export interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): void;
        buildIndexSignatureDisplay(info: IndexInfo, writer: SymbolWriter, kind: IndexKind, enclosingDeclaration?: Node, globalFlags?: TypeFormatFlags, symbolStack?: Symbol[]): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypePredicateDisplay(predicate: TypePredicate, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(thisParameter: Symbol, parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }

    export interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeProperty(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;

        // Called when the symbol writer encounters a symbol to write.  Currently only used by the
        // declaration emitter to help determine if it should patch up the final declaration file
        // with import statements it previously saw (but chose not to emit).
        /**
         * 符号写入器遇到符号写入时调用。当前仅由声明发射器使用，以帮助确定它是否应该用前面看到的导入语句修补最终声明文件（但选择不发出）。
         */
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
        reportInaccessibleThisError(): void;
        reportPrivateInBaseOfClassExpression(propertyName: string): void;
    }

    export const enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1 << 0,  // Write Array<T> instead T[]
        UseTypeOfFunction = 1 << 2,  // Write typeof instead of function type literal
        NoTruncation = 1 << 3,  // Don't truncate typeToString result
        WriteArrowStyleSignature = 1 << 4,  // Write arrow style signature
        WriteOwnNameForAnyLike = 1 << 5,  // Write symbol's own name instead of 'any' for any like types (eg. unknown, __resolving__ etc)
        WriteTypeArgumentsOfSignature = 1 << 6,  // Write the type arguments instead of type parameters of the signature
        InElementType = 1 << 7,  // Writing an array or union element type
        UseFullyQualifiedType = 1 << 8,  // Write out the fully qualified type name (eg. Module.Type, instead of Type)
        InFirstTypeArgument = 1 << 9,  // Writing first type argument of the instantiated type
        InTypeAlias = 1 << 10,  // Writing type in type alias declaration
        UseTypeAliasValue = 1 << 11,  // Serialize the type instead of using type-alias. This is needed when we emit declaration file.
        SuppressAnyReturnType = 1 << 12,  // If the return type is any-like, don't offer a return type.
        AddUndefined = 1 << 13,  // Add undefined to types of initialized, non-optional parameters
        WriteClassExpressionAsTypeLiteral = 1 << 14, // Write a type literal instead of (Anonymous class)
    }

    export const enum SymbolFormatFlags {
        None = 0x00000000,

        // Write symbols's type argument if it is instantiated symbol
        // eg. class C<T> { p: T }   <-- Show p as C<T>.p here
        //     var a: C<number>;
        //     var p = a.p;  <--- Here p is property of C<number> so show it as C<number>.p instead of just C.p
        WriteTypeParametersOrArguments = 0x00000001,

        // Use only external alias information to get the symbol name in the given context
        // eg.  module m { export class c { } } import x = m.c;
        // When this flag is specified m.c will be used to refer to the class instead of alias symbol x
        UseOnlyExternalAliasing = 0x00000002,
    }

    /* @internal */
    export const enum SymbolAccessibility {
        Accessible,
        NotAccessible,
        CannotBeNamed
    }

    /* @internal */
    export const enum SyntheticSymbolKind {
        UnionOrIntersection,
        Spread
    }

    export const enum TypePredicateKind {
        This,
        Identifier
    }

    export interface TypePredicateBase {
        kind: TypePredicateKind;
        type: Type;
    }

    export interface ThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.This;
    }

    export interface IdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.Identifier;
        parameterName: string;
        parameterIndex: number;
    }

    export type TypePredicate = IdentifierTypePredicate | ThisTypePredicate;

    /* @internal */
    export type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;

    /* @internal */
    export interface SymbolVisibilityResult {
        accessibility: SymbolAccessibility;
        aliasesToMakeVisible?: AnyImportSyntax[]; // aliases that need to have this symbol visible
        errorSymbolName?: string; // Optional symbol name that results in error
        errorNode?: Node; // optional node that results in error
    }

    /* @internal */
    export interface SymbolAccessibilityResult extends SymbolVisibilityResult {
        errorModuleName?: string; // If the symbol is not visible from module, module's name
    }

    /** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
    /* @internal */
    export enum TypeReferenceSerializationKind {
        Unknown,                            // The TypeReferenceNode could not be resolved. The type name
        // should be emitted using a safe fallback.
        TypeWithConstructSignatureAndValue, // The TypeReferenceNode resolves to a type with a constructor
        // function that can be reached at runtime (e.g. a `class`
        // declaration or a `var` declaration for the static side
        // of a type, such as the global `Promise` type in lib.d.ts).
        VoidNullableOrNeverType,            // The TypeReferenceNode resolves to a Void-like, Nullable, or Never type.
        NumberLikeType,                     // The TypeReferenceNode resolves to a Number-like type.
        StringLikeType,                     // The TypeReferenceNode resolves to a String-like type.
        BooleanType,                        // The TypeReferenceNode resolves to a Boolean-like type.
        ArrayLikeType,                      // The TypeReferenceNode resolves to an Array-like type.
        ESSymbolType,                       // The TypeReferenceNode resolves to the ESSymbol type.
        Promise,                            // The TypeReferenceNode resolved to the global Promise constructor symbol.
        TypeWithCallSignature,              // The TypeReferenceNode resolves to a Function type or a type
        // with call signatures.
        ObjectType,                         // The TypeReferenceNode resolves to any other type.
    }

    /* @internal */
    export interface EmitResolver {
        /** 有全局名称 */
        hasGlobalName(name: string): boolean;
        /** 取引用的出口容器 */
        getReferencedExportContainer(node: Identifier, prefixLocals?: boolean): SourceFile | ModuleDeclaration | EnumDeclaration;
        /** 取引用的引用声明 */
        getReferencedImportDeclaration(node: Identifier): Declaration;
        /** 取碰撞的名字被引用的声明 */
        getReferencedDeclarationWithCollidingName(node: Identifier): Declaration;
        /** 是碰撞的名字的声明 */
        isDeclarationWithCollidingName(node: Declaration): boolean;
        /** 是值别名声明 */
        isValueAliasDeclaration(node: Node): boolean;
        /** 是引用别名声明。 */
        isReferencedAliasDeclaration(node: Node, checkChildren?: boolean): boolean;
        /** 是顶级进口等于值的实体名称 */
        isTopLevelValueImportEqualsWithEntityName(node: ImportEqualsDeclaration): boolean;
        /** 取节点检查旗帜 */
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        /** 是可见的声明 */
        isDeclarationVisible(node: Declaration): boolean;
        /** 收集相关的别名 */
        collectLinkedAliases(node: Identifier): Node[];
        /** 是重载的实现 */
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean | undefined;
        /** 初始化参数是必需的 */
        isRequiredInitializedParameter(node: ParameterDeclaration): boolean;
        /** 是可选的初始化参数 */
        isOptionalUninitializedParameterProperty(node: ParameterDeclaration): boolean;
        /** 写声明的类型 */
        writeTypeOfDeclaration(declaration: AccessorDeclaration | VariableLikeDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        /** 写签名声明的返回类型 */
        writeReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        /** 写表达式的类型 */
        writeTypeOfExpression(expr: Expression, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        /** 是可访问的符号 */
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        /** 是可访问的实体名称 */
        isEntityNameVisible(entityName: EntityNameOrEntityNameExpression, enclosingDeclaration: Node): SymbolVisibilityResult;
        // Returns the constant value this property access resolves to, or 'undefined' for a non-constant
        /** 取常量值 */
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number;
        /** 取引用值的声明 */
        getReferencedValueDeclaration(reference: Identifier): Declaration;
        /** 取类型引用系列化旗帜 */
        getTypeReferenceSerializationKind(typeName: EntityName, location?: Node): TypeReferenceSerializationKind;
        /** 是可选参数 */
        isOptionalParameter(node: ParameterDeclaration): boolean;
        /** 模块导出的一些值 */
        moduleExportsSomeValue(moduleReferenceExpression: Expression): boolean;
        /** 参数是局部绑定的 */
        isArgumentsLocalBinding(node: Identifier): boolean;
        /** 取外部模块文件从申报到 */
        getExternalModuleFileFromDeclaration(declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration): SourceFile;
        /** 取类型引用指令从实体名称 */
        getTypeReferenceDirectivesForEntityName(name: EntityNameOrEntityNameExpression): string[];
        /** 取类型引用的指令从符号 */
        getTypeReferenceDirectivesForSymbol(symbol: Symbol, meaning?: SymbolFlags): string[];
        /** 是字面量常量声明 */
        isLiteralConstDeclaration(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration): boolean;
        /** 写入文字常量值 */
        writeLiteralConstValue(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration, writer: SymbolWriter): void;
        /** 让JSX厂实体 */
        getJsxFactoryEntity(): EntityName;
        取别名助手数据(): string[];
    }

    export const enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1 << 0,   // Variable (var) or parameter
        BlockScopedVariable = 1 << 1,   // A block-scoped variable (let or const)
        Property = 1 << 2,   // Property or enum member
        EnumMember = 1 << 3,   // Enum member
        Function = 1 << 4,   // Function
        Class = 1 << 5,   // Class
        Interface = 1 << 6,   // Interface
        ConstEnum = 1 << 7,   // Const enum
        RegularEnum = 1 << 8,   // Enum
        ValueModule = 1 << 9,   // Instantiated module
        NamespaceModule = 1 << 10,  // Uninstantiated module
        TypeLiteral = 1 << 11,  // Type Literal or mapped type
        ObjectLiteral = 1 << 12,  // Object Literal
        Method = 1 << 13,  // Method
        Constructor = 1 << 14,  // Constructor
        GetAccessor = 1 << 15,  // Get accessor
        SetAccessor = 1 << 16,  // Set accessor
        Signature = 1 << 17,  // Call, construct, or index signature
        TypeParameter = 1 << 18,  // Type parameter
        TypeAlias = 1 << 19,  // Type alias
        ExportValue = 1 << 20,  // Exported value marker (see comment in declareModuleMember in binder)
        Alias = 1 << 21,  // An alias for another symbol (see comment in isAliasSymbolDeclaration in checker)
        Prototype = 1 << 22,  // Prototype property (no source representation)
        ExportStar = 1 << 23,  // Export * declaration
        Optional = 1 << 24,  // Optional property
        Transient = 1 << 25,  // Transient symbol (created during type check)

        Enum = RegularEnum | ConstEnum,
        Variable = FunctionScopedVariable | BlockScopedVariable,
        Value = Variable | Property | EnumMember | Function | Class | Enum | ValueModule | Method | GetAccessor | SetAccessor,
        Type = Class | Interface | Enum | EnumMember | TypeLiteral | ObjectLiteral | TypeParameter | TypeAlias,
        Namespace = ValueModule | NamespaceModule | Enum,
        Module = ValueModule | NamespaceModule,
        Accessor = GetAccessor | SetAccessor,

        // Variables can be redeclared, but can not redeclare a block-scoped declaration with the
        // same name, or any other value that is not a variable, e.g. ValueModule or Class
        FunctionScopedVariableExcludes = Value & ~FunctionScopedVariable,

        // Block-scoped declarations are not allowed to be re-declared
        // they can not merge with anything in the value space
        BlockScopedVariableExcludes = Value,

        ParameterExcludes = Value,
        PropertyExcludes = None,
        EnumMemberExcludes = Value | Type,
        FunctionExcludes = Value & ~(Function | ValueModule),
        ClassExcludes = (Value | Type) & ~(ValueModule | Interface), // class-interface mergability done in checker.ts
        InterfaceExcludes = Type & ~(Interface | Class),
        RegularEnumExcludes = (Value | Type) & ~(RegularEnum | ValueModule), // regular enums merge only with regular enums and modules
        ConstEnumExcludes = (Value | Type) & ~ConstEnum, // const enums merge only with const enums
        ValueModuleExcludes = Value & ~(Function | Class | RegularEnum | ValueModule),
        NamespaceModuleExcludes = 0,
        MethodExcludes = Value & ~Method,
        GetAccessorExcludes = Value & ~SetAccessor,
        SetAccessorExcludes = Value & ~GetAccessor,
        TypeParameterExcludes = Type & ~TypeParameter,
        TypeAliasExcludes = Type,
        AliasExcludes = Alias,

        ModuleMember = Variable | Function | Class | Interface | Enum | Module | TypeAlias | Alias,

        ExportHasLocal = Function | Class | Enum | ValueModule,

        HasExports = Class | Enum | Module,
        HasMembers = Class | Interface | TypeLiteral | ObjectLiteral,

        BlockScoped = BlockScopedVariable | Class | Enum,

        PropertyOrAccessor = Property | Accessor,

        ClassMember = Method | Accessor | Property,

        /* @internal */
        // The set of things we consider semantically classifiable.  Used to speed up the LS during
        // classification.
        Classifiable = Class | Enum | TypeAlias | Interface | TypeParameter | Module,
    }
    export interface Symbol {
        flags: SymbolFlags;                     // Symbol flags
        name: __String;                           // Name of symbol
        别名?: 别名;
        别名id?: number;
        declarations?: Declaration[];           // Declarations associated with this symbol
        valueDeclaration?: Declaration;         // First value declaration of the symbol
        members?: SymbolTable;                  // Class, interface or literal instance members
        exports?: SymbolTable;                  // Module exports
        globalExports?: SymbolTable;            // Conditional global UMD exports
        /* @internal */ id?: number;            // Unique id (used to look up SymbolLinks)
        /* @internal */ mergeId?: number;       // Merge id (used to look up merged symbol)
        /* @internal */ parent?: Symbol;        // Parent symbol
        /* @internal */ exportSymbol?: Symbol;  // Exported symbol associated with this symbol
        /* @internal */ constEnumOnlyModule?: boolean; // True if module contains only const enums or other modules with only const enums
        /* @internal */ isReferenced?: boolean; // True if the symbol is referenced elsewhere
        /* @internal */ isReplaceableByMethod?: boolean; // Can this Javascript class property be replaced by a method symbol?
        /* @internal */ isAssigned?: boolean;   // True if the symbol is a parameter with assignments
    }
    /* @internal */
    export interface SymbolLinks {
        immediateTarget?: Symbol;           // Immediate target of an alias. May be another alias. Do not access directly, use `checker.getImmediateAliasedSymbol` instead.
        target?: Symbol;                    // Resolved (non-alias) target of an alias
        type?: Type;                        // Type of value symbol
        declaredType?: Type;                // Type of class, interface, enum, type alias, or type parameter
        typeParameters?: TypeParameter[];   // Type parameters of type alias (undefined if non-generic)
        inferredClassType?: Type;           // Type of an inferred ES5 class
        instantiations?: Map<Type>;         // Instantiations of generic type alias (undefined if non-generic)
        mapper?: TypeMapper;                // Type mapper for instantiation alias
        referenced?: boolean;               // True if alias symbol has been referenced as a value
        containingType?: UnionOrIntersectionType;  // Containing union or intersection type for synthetic property
        leftSpread?: Symbol;                // Left source for synthetic spread property
        rightSpread?: Symbol;               // Right source for synthetic spread property
        syntheticOrigin?: Symbol;           // For a property on a mapped or spread type, points back to the original property
        isDiscriminantProperty?: boolean;   // True if discriminant synthetic property
        resolvedExports?: SymbolTable;      // Resolved exports of module
        exportsChecked?: boolean;           // True if exports of external module have been checked
        typeParametersChecked?: boolean;    // True if type parameters of merged class and interface declarations have been checked.
        isDeclarationWithCollidingName?: boolean;    // True if symbol is block scoped redeclaration
        bindingElement?: BindingElement;    // Binding element associated with property symbol
        exportsSomeValue?: boolean;         // True if module exports some value (not just types)
        enumKind?: EnumKind;                // Enum declaration classification
    }

    /* @internal */
    export const enum EnumKind {
        Numeric,                            // Numeric enum (each member has a TypeFlags.Enum type)
        Literal                             // Literal enum (each member has a TypeFlags.EnumLiteral type)
    }

    /* @internal */
    export const enum CheckFlags {
        Instantiated = 1 << 0,         // Instantiated symbol
        SyntheticProperty = 1 << 1,         // Property in union or intersection type
        SyntheticMethod = 1 << 2,         // Method in union or intersection type
        Readonly = 1 << 3,         // Readonly transient symbol
        Partial = 1 << 4,         // Synthetic property present in some but not all constituents
        HasNonUniformType = 1 << 5,         // Synthetic property with non-uniform type in constituents
        ContainsPublic = 1 << 6,         // Synthetic property with public constituent(s)
        ContainsProtected = 1 << 7,         // Synthetic property with protected constituent(s)
        ContainsPrivate = 1 << 8,         // Synthetic property with private constituent(s)
        ContainsStatic = 1 << 9,         // Synthetic property with static constituent(s)
        Synthetic = SyntheticProperty | SyntheticMethod
    }

    /* @internal */
    export interface TransientSymbol extends Symbol, SymbolLinks {
        checkFlags: CheckFlags;
        isRestParameter?: boolean;
    }

    export const enum InternalSymbolName {
        Call = "__call", // Call signatures
        Constructor = "__constructor", // Constructor implementations
        New = "__new", // Constructor signatures
        Index = "__index", // Index signatures
        ExportStar = "__export", // Module export * declarations
        Global = "__global", // Global self-reference
        Missing = "__missing", // Indicates missing symbol
        Type = "__type", // Anonymous type literal symbol
        Object = "__object", // Anonymous object literal declaration
        JSXAttributes = "__jsxAttributes", // Anonymous JSX attributes object literal declaration
        Class = "__class", // Unnamed class expression
        Function = "__function", // Unnamed function expression
        Computed = "__computed", // Computed property name declaration with dynamic name
        Resolving = "__resolving__", // Indicator symbol used to mark partially resolved type aliases
        ExportEquals = "export=", // Export assignment symbol
        Default = "default", // Default export symbol (technically not wholly internal, but included here for usability)
    }

    /**
     * This represents a string whose leading underscore have been escaped by adding extra leading underscores.
     * The shape of this brand is rather unique compared to others we've used.
     * Instead of just an intersection of a string and an object, it is that union-ed
     * with an intersection of void and an object. This makes it wholly incompatible
     * with a normal string (which is good, it cannot be misused on assignment or on usage),
     * while still being comparable with a normal string via === (also good) and castable from a string.
     */
    export type __String = (string & { __escapedIdentifier: void }) | (void & { __escapedIdentifier: void }) | InternalSymbolName;

    /** EscapedStringMap based on ES6 Map interface. */
    export interface UnderscoreEscapedMap<T> {
        get(key: __String): T | undefined;
        has(key: __String): boolean;
        set(key: __String, value: T): this;
        delete(key: __String): boolean;
        clear(): void;
        forEach(action: (value: T, key: __String) => void): void;
        readonly size: number;
        keys(): Iterator<__String>;
        values(): Iterator<T>;
        entries(): Iterator<[__String, T]>;
    }

    /** SymbolTable based on ES6 Map interface. */
    export type SymbolTable = UnderscoreEscapedMap<Symbol>;

    export type 索引 = {
        键: string,
        值: string
    };

    export type 别名索引 = {
        键: __String | string,
        值: 别名
    };

    export type 索引表 = Map<string>;

    /** Represents a "prefix*suffix" pattern. */
    /* @internal */
    export interface Pattern {
        prefix: string;
        suffix: string;
    }

    /** Used to track a `declare module "foo*"`-like declaration. */
    /* @internal */
    export interface PatternAmbientModule {
        pattern: Pattern;
        symbol: Symbol;
    }

    /* @internal */
    export const enum NodeCheckFlags {
        /** 节点已被类型检查。 */
        TypeChecked = 0x00000001,  // Node has been type checked
        /** 字面量 "本对象" 引用 */
        LexicalThis = 0x00000002,  // Lexical 'this' reference
        /** 字面量 "本对象" 在体内使用 */
        CaptureThis = 0x00000004,  // Lexical 'this' used in body
        /** 字面量 "新.目标" 在体内使用  */
        CaptureNewTarget = 0x00000008,  // Lexical 'new.target' used in body
        /** 实例 "父对象" 引用 */
        SuperInstance = 0x00000100,  // Instance 'super' reference
        /** 静态 "父对象" 引用  */
        SuperStatic = 0x00000200,  // Static 'super' reference
        /** 语境类型被分配 */
        ContextChecked = 0x00000400,  // Contextual types have been assigned
        /** 一个异步方法，读取一个成员的"父对象"值。 */
        AsyncMethodWithSuper = 0x00000800,  // An async method that reads a value from a member of 'super'.
        /** 一个异步方法，指定一个值给一个成员的"父对象"。 */
        AsyncMethodWithSuperBinding = 0x00001000,  // An async method that assigns a value to a member of 'super'.
        /** 字面量 增强参数 在体内使用 */
        CaptureArguments = 0x00002000,  // Lexical 'arguments' used in body
        /** 枚举成员的值已被计算 */
        EnumValuesComputed = 0x00004000,  // Values for enum members have been computed, and any errors have been reported for them.
        /** 词汇模块实例化声明与先前的类声明合并 */
        LexicalModuleMergesWithClass = 0x00008000,  // Instantiated lexical module declaration is merged with a previous class declaration.
        /** 循环，包含块限定了作用域的变量被关闭 */
        LoopWithCapturedBlockScopedBinding = 0x00010000,  // Loop that contains block scoped variable captured in closure
        /** 块作用域的结合，在一些功能捕获 */
        CapturedBlockScopedBinding = 0x00020000,  // Block-scoped binding that is captured in some function
        /** 块作用域嵌套迭代语句结合申报 */
        BlockScopedBindingInLoop = 0x00040000,  // Block-scoped binding with declaration nested inside iteration statement
        /** 装饰类，包含结合本身在类体。 */
        ClassWithBodyScopedClassBinding = 0x00080000,  // Decorated class that contains a binding to itself inside of the class body.
        /** 结合装饰类里面的类的身体。 */
        BodyScopedClassBinding = 0x00100000,  // Binding to a decorated class inside of the class's body.
        /** 块作用域绑定的值应明确复制转换环外 */
        NeedsLoopOutParameter = 0x00200000,  // Block scoped binding whose value should be explicitly copied outside of the converted loop
        /** 参数分配已标记 */
        AssignmentsMarked = 0x00400000,  // Parameter assignments have been marked
        /** 类包含一个绑定到它的构造函数在类体。 */
        ClassWithConstructorReference = 0x00800000,  // Class that contains a binding to its constructor inside of the class body.
        /** 绑定到类的构造函数里面的类的身体。 */
        ConstructorReferenceInClass = 0x01000000,  // Binding to a class constructor inside of the class's body.
    }

    /* @internal */
    export interface NodeLinks {
        flags?: NodeCheckFlags;           // Set of flags specific to Node
        resolvedType?: Type;              // Cached type of type node
        resolvedSignature?: Signature;    // Cached signature of signature node or call expression
        resolvedSymbol?: Symbol;          // Cached name resolution result
        resolvedIndexInfo?: IndexInfo;    // Cached indexing info resolution result
        maybeTypePredicate?: boolean;     // Cached check whether call expression might reference a type predicate
        enumMemberValue?: string | number;  // Constant value of enum member
        isVisible?: boolean;              // Is this node visible
        containsArgumentsReference?: boolean; // Whether a function-like declaration contains an 'arguments' reference
        hasReportedStatementInAmbientContext?: boolean;  // Cache boolean if we report statements in ambient context
        jsxFlags?: JsxFlags;              // flags for knowing what kind of element/attributes we're dealing with
        resolvedJsxElementAttributesType?: Type;  // resolved element attributes type of a JSX openinglike element
        hasSuperCall?: boolean;           // recorded result when we try to find super-call. We only try to find one if this flag is undefined, indicating that we haven't made an attempt.
        superCall?: ExpressionStatement;  // Cached first super-call found in the constructor. Used in checking whether super is called before this-accessing
        switchTypes?: Type[];             // Cached array of switch case expression types
    }

    export const enum TypeFlags {
        Any = 1 << 0,
        String = 1 << 1,
        Number = 1 << 2,
        Boolean = 1 << 3,
        Enum = 1 << 4,
        StringLiteral = 1 << 5,
        NumberLiteral = 1 << 6,
        BooleanLiteral = 1 << 7,
        EnumLiteral = 1 << 8,   // Always combined with StringLiteral, NumberLiteral, or Union
        ESSymbol = 1 << 9,   // Type of symbol primitive introduced in ES6
        Void = 1 << 10,
        Undefined = 1 << 11,
        Null = 1 << 12,
        Never = 1 << 13,  // Never type
        TypeParameter = 1 << 14,  // Type parameter
        Object = 1 << 15,  // Object type
        Union = 1 << 16,  // Union (T | U)
        Intersection = 1 << 17,  // Intersection (T & U)
        Index = 1 << 18,  // keyof T
        IndexedAccess = 1 << 19,  // T[K]
        /* @internal */
        FreshLiteral = 1 << 20,  // Fresh literal type
        /* @internal */
        ContainsWideningType = 1 << 21,  // Type is or contains undefined or null widening type 类型包含或包含未定义的或空的扩展类型。
        /* @internal */
        ContainsObjectLiteral = 1 << 22,  // Type is or contains object literal type
        /* @internal */
        ContainsAnyFunctionType = 1 << 23,  // Type is or contains object literal type
        NonPrimitive = 1 << 24,  // intrinsic object type 内在的对象类型
        /* @internal */
        JsxAttributes = 1 << 25,  // Jsx attributes type

        /* @internal */
        Nullable = Undefined | Null,
        Literal = StringLiteral | NumberLiteral | BooleanLiteral,
        StringOrNumberLiteral = StringLiteral | NumberLiteral,
        /* @internal */
        DefinitelyFalsy = StringLiteral | NumberLiteral | BooleanLiteral | Void | Undefined | Null,
        PossiblyFalsy = DefinitelyFalsy | String | Number | Boolean,
        /* @internal */
        Intrinsic = Any | String | Number | Boolean | BooleanLiteral | ESSymbol | Void | Undefined | Null | Never | NonPrimitive,
        /* @internal */
        Primitive = String | Number | Boolean | Enum | EnumLiteral | ESSymbol | Void | Undefined | Null | Literal,
        StringLike = String | StringLiteral | Index,
        NumberLike = Number | NumberLiteral | Enum,
        BooleanLike = Boolean | BooleanLiteral,
        EnumLike = Enum | EnumLiteral,
        UnionOrIntersection = Union | Intersection,
        StructuredType = Object | Union | Intersection,
        StructuredOrTypeVariable = StructuredType | TypeParameter | Index | IndexedAccess,
        TypeVariable = TypeParameter | IndexedAccess,

        // 'Narrowable' types are types where narrowing actually narrows.
        // This *should* be every type other than null, undefined, void, and never
        Narrowable = Any | StructuredType | TypeParameter | Index | IndexedAccess | StringLike | NumberLike | BooleanLike | ESSymbol | NonPrimitive,
        NotUnionOrUnit = Any | ESSymbol | Object | NonPrimitive,
        /* @internal */
        RequiresWidening = ContainsWideningType | ContainsObjectLiteral,
        /* @internal */
        PropagatingFlags = ContainsWideningType | ContainsObjectLiteral | ContainsAnyFunctionType,
        Cts类型转换 = String | StringLiteral | EnumLiteral | Object | Union | Index
    }

    export type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;

    // Properties common to all types
    export interface Type {
        flags: TypeFlags;                // Flags
        /* @internal */ id: number;      // Unique ID
        /* @internal */ checker: TypeChecker;
        symbol?: Symbol;                 // Symbol associated with type (if any)
        别名?: 别名;
        别名id?: number;
        pattern?: DestructuringPattern;  // Destructuring pattern represented by type (if any)
        aliasSymbol?: Symbol;            // Alias associated with type
        aliasTypeArguments?: Type[];     // Alias type arguments (if any)
    }

    /* @internal */
    // Intrinsic types (TypeFlags.Intrinsic)
    export interface IntrinsicType extends Type {
        intrinsicName: string;        // Name of intrinsic type
    }

    // String literal types (TypeFlags.StringLiteral)
    // Numeric literal types (TypeFlags.NumberLiteral)
    export interface LiteralType extends Type {
        /** 值的文字 */
        value: string | number;     // Value of literal
        /** 新版本的类型 */
        freshType?: LiteralType;    // Fresh version of type
        /** 类型的常规版本 */
        regularType?: LiteralType;  // Regular version of type
    }

    export interface StringLiteralType extends LiteralType {
        value: string;
    }

    export interface NumberLiteralType extends LiteralType {
        value: number;
    }

    // Enum types (TypeFlags.Enum)
    export interface EnumType extends Type {
    }

    export const enum ObjectFlags {
        Class = 1 << 0,  // Class
        Interface = 1 << 1,  // Interface
        Reference = 1 << 2,  // Generic type reference
        Tuple = 1 << 3,  // Synthesized generic tuple type
        Anonymous = 1 << 4,  // Anonymous
        Mapped = 1 << 5,  // Mapped
        Instantiated = 1 << 6,  // Instantiated anonymous or mapped type
        ObjectLiteral = 1 << 7,  // Originates in an object literal
        EvolvingArray = 1 << 8,  // Evolving array type
        ObjectLiteralPatternWithComputedProperties = 1 << 9,  // Object literal pattern with computed properties
        ClassOrInterface = Class | Interface
    }
    export interface 文本名称 {
        名称: __String | string;
        别名: __String | string;
    }
    // Object types (TypeFlags.ObjectType)
    export interface ObjectType extends Type {
        objectFlags: ObjectFlags;
    }

    /** Class and interface types (ObjectFlags.Class and ObjectFlags.Interface). */
    export interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];           // Type parameters (undefined if non-generic)
        outerTypeParameters: TypeParameter[];      // Outer type parameters (undefined if none)
        localTypeParameters: TypeParameter[];      // Local type parameters (undefined if none)
        thisType: TypeParameter;                   // The "this" type (undefined if none)
        /* @internal */
        resolvedBaseConstructorType?: Type;        // Resolved base constructor type of class
        /* @internal */
        resolvedBaseTypes: BaseType[];             // Resolved base types
    }

    // Object type or intersection of object types
    export type BaseType = ObjectType | IntersectionType;

    export interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];              // Declared members
        declaredCallSignatures: Signature[];       // Declared call signatures
        declaredConstructSignatures: Signature[];  // Declared construct signatures
        declaredStringIndexInfo: IndexInfo;        // Declared string indexing info
        declaredNumberIndexInfo: IndexInfo;        // Declared numeric indexing info
    }

    /**
     * Type references (ObjectFlags.Reference). When a class or interface has type parameters or
     * a "this" type, references to the class or interface are made using type references. The
     * typeArguments property specifies the types to substitute for the type parameters of the
     * class or interface and optionally includes an extra element that specifies the type to
     * substitute for "this" in the resulting instantiation. When no extra argument is present,
     * the type reference itself is substituted for "this". The typeArguments property is undefined
     * if the class or interface has no type parameters and the reference isn't specifying an
     * explicit "this" argument.
     */
    export interface TypeReference extends ObjectType {
        target: GenericType;    // Type reference target
        typeArguments?: Type[];  // Type reference type arguments (undefined if none)
    }

    // Generic class and interface types
    export interface GenericType extends InterfaceType, TypeReference {
        /* @internal */
        instantiations: Map<TypeReference>;   // Generic instantiation cache
    }

    export interface UnionOrIntersectionType extends Type {
        types: Type[];                    // Constituent types
        /* @internal */
        propertyCache: SymbolTable;       // Cache of resolved properties
        /* @internal */
        resolvedProperties: Symbol[];
        /* @internal */
        resolvedIndexType: IndexType;
        /* @internal */
        resolvedBaseConstraint: Type;
        /* @internal */
        couldContainTypeVariables: boolean;
    }

    export interface UnionType extends UnionOrIntersectionType { }

    export interface IntersectionType extends UnionOrIntersectionType {
        /* @internal */
        resolvedApparentType: Type;
    }

    export type StructuredType = ObjectType | UnionType | IntersectionType;

    /* @internal */
    // An instantiated anonymous type has a target and a mapper
    export interface AnonymousType extends ObjectType {
        target?: AnonymousType;  // Instantiation target
        mapper?: TypeMapper;     // Instantiation mapper
    }

    /* @internal */
    export interface MappedType extends ObjectType {
        /** 声明 */
        declaration: MappedTypeNode;
        /** 类型参数 */
        typeParameter?: TypeParameter;
        /** 约束类型 */
        constraintType?: Type;
        /** 模板 */
        templateType?: Type;
        /** 修饰符类型 */
        modifiersType?: Type;
        /** 映射 */
        mapper?: TypeMapper;  // Instantiation mapper
    }
    /** 不断变化的阵列式 */
    export interface EvolvingArrayType extends ObjectType {
        elementType: Type;      // Element expressions of evolving array type
        finalArrayType?: Type;  // Final array type of evolving array type
    }

    /* @internal */
    // Resolved object, union, or intersection type
    /** 解析 对象、联合或交集类型 */
    export interface ResolvedType extends ObjectType, UnionOrIntersectionType {
        members: SymbolTable;              // Properties by name
        properties: Symbol[];              // Properties
        callSignatures: Signature[];       // Call signatures of type
        constructSignatures: Signature[];  // Construct signatures of type
        stringIndexInfo?: IndexInfo;       // String indexing info
        numberIndexInfo?: IndexInfo;       // Numeric indexing info
    }

    /* @internal */
    // Object literals are initially marked fresh. Freshness disappears following an assignment,
    // before a type assertion, or when  an object literal's type is widened. The regular
    // version of a fresh type is identical except for the TypeFlags.FreshObjectLiteral flag.
    /**
     * 对象字面量开始显着新鲜。在赋值之后、类型断言之前或对象文字类型被加宽时，新鲜度消失。一个新
     * 的类型的普通版本相同，除了typeflags.freshobjectliteral旗。
     */
    export interface FreshObjectLiteralType extends ResolvedType {
        regularType: ResolvedType;  // Regular version of fresh type
    }

    // Just a place to cache element types of iterables and iterators
    /* @internal */
    export interface IterableOrIteratorType extends ObjectType, UnionType {
        iteratedTypeOfIterable?: Type;
        iteratedTypeOfIterator?: Type;
        iteratedTypeOfAsyncIterable?: Type;
        iteratedTypeOfAsyncIterator?: Type;
    }

    /* @internal */
    export interface PromiseOrAwaitableType extends ObjectType, UnionType {
        promiseTypeOfPromiseConstructor?: Type;
        promisedTypeOfPromise?: Type;
        awaitedTypeOfType?: Type;
    }

    export interface TypeVariable extends Type {
        /* @internal */
        resolvedBaseConstraint: Type;
        /* @internal */
        resolvedIndexType: IndexType;
    }

    // Type parameters (TypeFlags.TypeParameter)
    export interface TypeParameter extends TypeVariable {
        constraint: Type;        // Constraint
        default?: Type;
        /* @internal */
        target?: TypeParameter;  // Instantiation target
        /* @internal */
        mapper?: TypeMapper;     // Instantiation mapper
        /* @internal */
        isThisType?: boolean;
        /* @internal */
        resolvedDefaultType?: Type;
    }

    // Indexed access types (TypeFlags.IndexedAccess)
    // Possible forms are T[xxx], xxx[T], or xxx[keyof T], where T is a type variable
    export interface IndexedAccessType extends TypeVariable {
        objectType: Type;
        indexType: Type;
        constraint?: Type;
    }

    // keyof T types (TypeFlags.Index)
    export interface IndexType extends Type {
        type: TypeVariable | UnionOrIntersectionType;
    }

    export const enum SignatureKind {
        Call,
        Construct,
    }

    export interface Signature {
        declaration: SignatureDeclaration;  // Originating declaration
        typeParameters?: TypeParameter[];   // Type parameters (undefined if non-generic)
        parameters: Symbol[];               // Parameters
        /* @internal */
        thisParameter?: Symbol;             // symbol of this-type parameter
        /* @internal */
        resolvedReturnType: Type;           // Resolved return type
        /* @internal */
        minArgumentCount: number;           // Number of non-optional parameters
        /* @internal */
        hasRestParameter: boolean;          // True if last parameter is rest parameter
        /* @internal */
        hasLiteralTypes: boolean;           // True if specialized
        /* @internal */
        target?: Signature;                 // Instantiation target
        /* @internal */
        mapper?: TypeMapper;                // Instantiation mapper
        /* @internal */
        unionSignatures?: Signature[];      // Underlying signatures of a union signature
        /* @internal */
        erasedSignatureCache?: Signature;   // Erased version of signature (deferred)
        /* @internal */
        isolatedSignatureType?: ObjectType; // A manufactured type that just contains the signature for purposes of signature comparison
        /* @internal */
        typePredicate?: TypePredicate;
        /* @internal */
        instantiations?: Map<Signature>;    // Generic signature instantiation cache
    }

    export const enum IndexKind {
        String,
        Number,
    }

    export interface IndexInfo {
        type: Type;
        isReadonly: boolean;
        declaration?: SignatureDeclaration;
    }

    /* @internal */
    export interface TypeMapper {
        (t: TypeParameter): Type;
        mappedTypes?: TypeParameter[]; // Types mapped by this mapper
        instantiations?: Type[];       // Cache of instantiations created using this type mapper.
    }

    export const enum InferencePriority {
        NakedTypeVariable = 1 << 0,  // Naked type variable in union or intersection type
        MappedType = 1 << 1,  // Reverse inference for mapped type
        ReturnType = 1 << 2,  // Inference made from return type of generic function
    }

    export interface InferenceInfo {
        typeParameter: TypeParameter;
        candidates: Type[];
        inferredType: Type;
        priority: InferencePriority;
        topLevel: boolean;
        isFixed: boolean;
    }

    export const enum InferenceFlags {
        /** 独立候选人推断联合类型（否则未知类型） */
        InferUnionTypes = 1 << 0,  // Infer union types for disjoint candidates (otherwise unknownType)
        /** 没有inferences（otherwise unknowntype推断出什么样的黄金emptyobjecttype） */
        NoDefault = 1 << 1,  // Infer unknownType for no inferences (otherwise anyType or emptyObjectType)
        AnyDefault = 1 << 2,  // Infer anyType for no inferences (otherwise emptyObjectType)
    }

    /* @internal */
    export interface InferenceContext extends TypeMapper {
        signature: Signature;               // Generic signature for which inferences are made
        inferences: InferenceInfo[];        // Inferences made for each type parameter
        flags: InferenceFlags;              // Inference flags
    }

    /* @internal */
    export const enum SpecialPropertyAssignmentKind {
        None,
        /// exports.name = expr
        ExportsProperty,
        /// module.exports = expr
        ModuleExports,
        /// className.prototype.name = expr
        PrototypeProperty,
        /// this.name = expr
        ThisProperty,
        // F.name = expr
        Property
    }

    export interface JsFileExtensionInfo {
        extension: string;
        isMixedContent: boolean;
    }

    export interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        message: string;
    }

    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    export interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }

    export interface Diagnostic {
        file: SourceFile | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | DiagnosticMessageChain;
        category: DiagnosticCategory;
        code: number;
        source?: string;
    }

    export enum DiagnosticCategory {
        Warning,
        Error,
        Message
    }

    export enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2
    }

    export interface PluginImport {
        name: string;
    }

    export type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[];

    export interface CompilerOptions {
        /*@internal*/ all?: boolean;
        allowJs?: boolean;
        /*@internal*/ allowNonTsExtensions?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;  // Always combine with strict property
        baseUrl?: string;
        charset?: string;
        checkJs?: boolean;
        /* @internal */ configFilePath?: string;
        /* @internal */ readonly configFile?: JsonSourceFile;
        declaration?: boolean;
        declarationDir?: string;
        /* @internal */ diagnostics?: boolean;
        /* @internal */ extendedDiagnostics?: boolean;
        disableSizeLimit?: boolean;
        downlevelIteration?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        /*@internal*/help?: boolean;
        importHelpers?: boolean;
        /*@internal*/init?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        jsx?: JsxEmit;
        lib?: string[];
        /*@internal*/listEmittedFiles?: boolean;
        /*@internal*/listFiles?: boolean;
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        /*@internal*/noEmitForJsFiles?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;  // Always combine with strict property
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;  // Always combine with strict property
        noStrictGenericChecks?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        noImplicitUseStrict?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        /*@internal*/ plugins?: PluginImport[];
        preserveConstEnums?: boolean;
        project?: string;
        /* @internal */ pretty?: DiagnosticStyle;
        reactNamespace?: string;
        jsxFactory?: string;
        removeComments?: boolean;
        rootDir?: string;
        rootDirs?: string[];
        skipLibCheck?: boolean;
        skipDefaultLibCheck?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        strict?: boolean;
        strictNullChecks?: boolean;  // Always combine with strict property
        /* @internal */ stripInternal?: boolean;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        /* @internal */ suppressOutputPathCheck?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        types?: string[];
        /** Paths used to compute primary types search locations */
        typeRoots?: string[];
        /*@internal*/ version?: boolean;
        /*@internal*/ watch?: boolean;

        中文关键字?: boolean;
        转译Ts?: boolean;
        转译Cts?: boolean;
        转译声明?: boolean;
        输出无词典标识符?: boolean;
        词典在文件尾?: boolean;
        词典不重复输出?: boolean;
        [option: string]: CompilerOptionsValue | JsonSourceFile | undefined;
    }

    export interface TypeAcquisition {
        /* @deprecated typingOptions.enableAutoDiscovery
         * Use typeAcquisition.enable instead.
         */
        enableAutoDiscovery?: boolean;
        enable?: boolean;
        include?: string[];
        exclude?: string[];
        [option: string]: string[] | boolean | undefined;
    }

    export interface DiscoverTypingsInfo {
        fileNames: string[];                            // The file names that belong to the same project.
        projectRootPath: string;                        // The path to the project root directory
        safeListPath: string;                           // The path used to retrieve the safe list
        packageNameToTypingLocation: Map<string>;       // The map of package names to their cached typing locations
        typeAcquisition: TypeAcquisition;               // Used to customize the type acquisition process
        compilerOptions: CompilerOptions;               // Used as a source for typing inference
        unresolvedImports: ReadonlyArray<string>;       // List of unresolved module ids from imports
    }

    export const enum 词典类别 {
        汉英词典 = 1,
        英汉词典 = 2,
    }

    export const enum 使用场景 {
        输出 = 1,
        类型检查 = 2,
    }

    export const enum 输出种类 {
        输出源码 = 1,
        输出中文 = 2,
        输出英文 = 3
    }

    export const enum 文件种类 {
        未知 = 0,
        DCTS = 1,
        DTS = 2,
        CTS = 3,
        TS = 4,
        CTSX = 5,
        TSX = 6,
        JS = 7,
        JSX = 8,
        外部 = 9,
        JSON = 10,
    }


    export enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
        ESNext = 6
    }

    export const enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
        ReactNative = 3
    }

    export const enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1
    }

    export interface LineAndCharacter {
        line: number;
        /*
         * This value denotes the character position in line and is different from the 'column' because of tab characters.
         */
        character: number;
    }

    export const enum ScriptKind {
        Unknown = 0,
        JS = 1,
        JSX = 2,
        TS = 3,
        TSX = 4,
        CTS = 5,
        CTSX = 6,
        External = 7,
        JSON = 8
    }

    export const enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ESNext = 5,
        Latest = ESNext,
    }

    export const enum LanguageVariant {
        Standard,
        JSX,
    }

    /* @internal */
    export const enum DiagnosticStyle {
        Simple,
        Pretty,
    }

    /** Either a parsed command line or a parsed tsconfig.json */
    export interface ParsedCommandLine {
        options: CompilerOptions;
        typeAcquisition?: TypeAcquisition;
        fileNames: string[];
        raw?: any;
        errors: Diagnostic[];
        wildcardDirectories?: MapLike<WatchDirectoryFlags>;
        compileOnSave?: boolean;
    }

    export const enum WatchDirectoryFlags {
        None = 0,
        Recursive = 1 << 0,
    }

    export interface ExpandResult {
        fileNames: string[];
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
    }

    /* @internal */
    export interface CommandLineOptionBase {
        name: string;
        别名?: string;
        type: "string" | "number" | "boolean" | "object" | "list" | Map<number | string>;    // a value of a primitive type, or an object literal mapping named values to actual values
        isFilePath?: boolean;                                   // True if option value is a path or fileName
        shortName?: string;                                     // A short mnemonic for convenience - for instance, 'h' can be used in place of 'help'
        description?: DiagnosticMessage;                        // The message describing what the command line switch does
        paramType?: DiagnosticMessage;                          // The name to be used for a non-boolean option's parameter
        isTSConfigOnly?: boolean;                               // True if option can only be specified via tsconfig.json file
        isCommandLineOnly?: boolean;
        showInSimplifiedHelpView?: boolean;
        category?: DiagnosticMessage;
    }

    /* @internal */
    export interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
        type: "string" | "number" | "boolean";
    }

    /* @internal */
    export interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
        type: Map<number | string>;  // an object literal mapping named values to actual values
    }

    /* @internal */
    export interface TsConfigOnlyOption extends CommandLineOptionBase {
        type: "object";
        elementOptions?: Map<CommandLineOption>;
        extraKeyDiagnosticMessage?: DiagnosticMessage;
    }

    /* @internal */
    export interface CommandLineOptionOfListType extends CommandLineOptionBase {
        type: "list";
        element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption;
    }

    /* @internal */
    export type CommandLineOption = CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption | CommandLineOptionOfListType;

    /* @internal */
    export const enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 0x7F,

        lineFeed = 0x0A,              // \n
        carriageReturn = 0x0D,        // \r
        lineSeparator = 0x2028,
        paragraphSeparator = 0x2029,
        nextLine = 0x0085,

        // Unicode 3.0 space characters
        space = 0x0020,   // " "
        nonBreakingSpace = 0x00A0,   //
        enQuad = 0x2000,
        emQuad = 0x2001,
        enSpace = 0x2002,
        emSpace = 0x2003,
        threePerEmSpace = 0x2004,
        fourPerEmSpace = 0x2005,
        sixPerEmSpace = 0x2006,
        figureSpace = 0x2007,
        punctuationSpace = 0x2008,
        thinSpace = 0x2009,
        hairSpace = 0x200A,
        zeroWidthSpace = 0x200B,
        narrowNoBreakSpace = 0x202F,
        ideographicSpace = 0x3000,
        mathematicalSpace = 0x205F,
        ogham = 0x1680,

        _ = 0x5F,
        $ = 0x24,

        _0 = 0x30,
        _1 = 0x31,
        _2 = 0x32,
        _3 = 0x33,
        _4 = 0x34,
        _5 = 0x35,
        _6 = 0x36,
        _7 = 0x37,
        _8 = 0x38,
        _9 = 0x39,

        a = 0x61,
        b = 0x62,
        c = 0x63,
        d = 0x64,
        e = 0x65,
        f = 0x66,
        g = 0x67,
        h = 0x68,
        i = 0x69,
        j = 0x6A,
        k = 0x6B,
        l = 0x6C,
        m = 0x6D,
        n = 0x6E,
        o = 0x6F,
        p = 0x70,
        q = 0x71,
        r = 0x72,
        s = 0x73,
        t = 0x74,
        u = 0x75,
        v = 0x76,
        w = 0x77,
        x = 0x78,
        y = 0x79,
        z = 0x7A,

        A = 0x41,
        B = 0x42,
        C = 0x43,
        D = 0x44,
        E = 0x45,
        F = 0x46,
        G = 0x47,
        H = 0x48,
        I = 0x49,
        J = 0x4A,
        K = 0x4B,
        L = 0x4C,
        M = 0x4D,
        N = 0x4E,
        O = 0x4F,
        P = 0x50,
        Q = 0x51,
        R = 0x52,
        S = 0x53,
        T = 0x54,
        U = 0x55,
        V = 0x56,
        W = 0x57,
        X = 0x58,
        Y = 0x59,
        Z = 0x5a,

        ampersand = 0x26,             // &
        asterisk = 0x2A,              // *
        at = 0x40,                    // @
        backslash = 0x5C,             // \
        backtick = 0x60,              // `
        bar = 0x7C,                   // |
        caret = 0x5E,                 // ^
        closeBrace = 0x7D,            // }
        closeBracket = 0x5D,          // ]
        closeParen = 0x29,            // )
        colon = 0x3A,                 // :
        comma = 0x2C,                 // ,
        dot = 0x2E,                   // .
        doubleQuote = 0x22,           // "
        equals = 0x3D,                // =
        exclamation = 0x21,           // !
        greaterThan = 0x3E,           // >
        hash = 0x23,                  // #
        lessThan = 0x3C,              // <
        minus = 0x2D,                 // -
        openBrace = 0x7B,             // {
        openBracket = 0x5B,           // [
        openParen = 0x28,             // (
        percent = 0x25,               // %
        plus = 0x2B,                  // +
        question = 0x3F,              // ?
        semicolon = 0x3B,             // ;
        singleQuote = 0x27,           // '
        slash = 0x2F,                 // /
        tilde = 0x7E,                 // ~

        backspace = 0x08,             // \b
        formFeed = 0x0C,              // \f
        byteOrderMark = 0xFEFF,
        tab = 0x09,                   // \t
        verticalTab = 0x0B,           // \v
    }

    export interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        // readFile function is used to read arbitrary text files on disk, i.e. when resolution procedure needs the content of 'package.json'
        // to determine location of bundled typings for node module
        readFile(fileName: string): string | undefined;
        trace?(s: string): void;
        directoryExists?(directoryName: string): boolean;
        realpath?(path: string): string;
        getCurrentDirectory?(): string;
        getDirectories?(path: string): string[];
    }

    /**
     * Represents the result of module resolution.
     * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
     * The Program will then filter results based on these flags.
     *
     * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
     */
    export interface ResolvedModule {
        /** Path of the file the module was resolved to. */
        resolvedFileName: string;
        /**
         * Denotes if 'resolvedFileName' is isExternalLibraryImport and thus should be a proper external module:
         * - be a .d.ts file
         * - use top level imports\exports
         * - don't use tripleslash references
         */
        isExternalLibraryImport?: boolean;
    }

    /**
     * ResolvedModule with an explicitly provided `extension` property.
     * Prefer this over `ResolvedModule`.
     */
    export interface ResolvedModuleFull extends ResolvedModule {
        /**
         * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
         * This is optional for backwards-compatibility, but will be added if not provided.
         */
        extension: Extension;
    }

    export const enum Extension {
        Ts = ".ts",
        Tsx = ".tsx",
        CTs = ".cts",
        CTsx = ".ctsx",
        Dts = ".d.ts",
        DCts = ".d.cts",
        Js = ".js",
        Jsx = ".jsx"
    }

    export interface ResolvedModuleWithFailedLookupLocations {
        resolvedModule: ResolvedModuleFull | undefined;
        /* @internal */
        failedLookupLocations: string[];
    }

    export interface ResolvedTypeReferenceDirective {
        // True if the type declaration file was found in a primary lookup location
        primary: boolean;
        // The location of the .d.ts file we located, or undefined if resolution failed
        resolvedFileName?: string;
    }

    export interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
        resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective;
        failedLookupLocations: string[];
    }

    export interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;

        /*
         * CompilerHost must either implement resolveModuleNames (in case if it wants to be completely in charge of
         * module name resolution) or provide implementation for methods from ModuleResolutionHost (in this case compiler
         * will apply built-in module resolution logic and use members of ModuleResolutionHost to ask host specific questions).
         * If resolveModuleNames is implemented then implementation for members from ModuleResolutionHost can be just
         * 'throw new Error("NotImplemented")'
         */
        resolveModuleNames?(moduleNames: string[], containingFile: string): ResolvedModule[];
        /**
         * This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
         */
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        getEnvironmentVariable?(name: string): string;
    }

    /* @internal */
    export const enum TransformFlags {
        None = 0,

        // Facts
        // - Flags used to indicate that a node or subtree contains syntax that requires transformation.
        // 标志以表明节点或子树包含语法需要转型。
        TypeScript = 1 << 0,
        ContainsTypeScript = 1 << 1,
        ContainsJsx = 1 << 2,
        ContainsESNext = 1 << 3,
        ContainsES2017 = 1 << 4,
        ContainsES2016 = 1 << 5,
        ES2015 = 1 << 6,
        ContainsES2015 = 1 << 7,
        Generator = 1 << 8,
        /** 包含发电机 */
        ContainsGenerator = 1 << 9,
        /** 解构的任务 */
        DestructuringAssignment = 1 << 10,
        /** 包含解构的任务 */
        ContainsDestructuringAssignment = 1 << 11,

        // Markers
        // - Flags used to indicate that a subtree contains a specific transformation.
        // 标志用于表明子树包含一个特定的转换。
        /** 包含装饰 */
        ContainsDecorators = 1 << 12,
        /** 包含属性初始化程序 */
        ContainsPropertyInitializer = 1 << 13,
        ContainsLexicalThis = 1 << 14,
        ContainsCapturedLexicalThis = 1 << 15,
        ContainsLexicalThisInComputedPropertyName = 1 << 16,
        /** 包含默认值赋值 */
        ContainsDefaultValueAssignments = 1 << 17,
        /** 包含参数属性赋值 */
        ContainsParameterPropertyAssignments = 1 << 18,
        /** 包含传播 */
        ContainsSpread = 1 << 19,
        /** 包含对象传播 */
        ContainsObjectSpread = 1 << 20,
        /** 包含休息 */
        ContainsRest = ContainsSpread,
        /** 包含对象休息 */
        ContainsObjectRest = ContainsObjectSpread,
        ContainsComputedPropertyName = 1 << 21,
        ContainsBlockScopedBinding = 1 << 22,
        ContainsBindingPattern = 1 << 23,
        ContainsYield = 1 << 24,
        /** 包含申报或完成 */
        ContainsHoistedDeclarationOrCompletion = 1 << 25,

        ContainsDynamicImport = 1 << 26,
        CTS转换 = 1 << 27,

        // Please leave this as 1 << 29.
        // It is the maximum bit we can set before we outgrow the size of a v8 small integer (SMI) on an x86 system.
        // It is a good reminder of how much room we have left
        HasComputedFlags = 1 << 29, // Transform flags have been computed.

        // Assertions
        // - Bitmasks that are used to assert facts about the syntax of a node and its subtree.
        // 掩码是用来声明一个节点及其子树的语法事实。
        AssertTypeScript = TypeScript | ContainsTypeScript,
        AssertJsx = ContainsJsx,
        AssertESNext = ContainsESNext,
        AssertES2017 = ContainsES2017,
        AssertES2016 = ContainsES2016,
        AssertES2015 = ES2015 | ContainsES2015,
        AssertGenerator = Generator | ContainsGenerator,
        AssertDestructuringAssignment = DestructuringAssignment | ContainsDestructuringAssignment,

        // Scope Exclusions 责任免除范围
        // - Bitmasks that exclude flags from propagating out of a specific context
        //   into the subtree flags of their container.
        // 位掩码，排除旗帜传播了一个特定的情况下为其容器的子树的旗帜。
        /** 节点排除 */
        NodeExcludes = TypeScript | ES2015 | DestructuringAssignment | Generator | CTS转换 | HasComputedFlags,
        ArrowFunctionExcludes = NodeExcludes | ContainsDecorators | ContainsDefaultValueAssignments | ContainsLexicalThis | ContainsParameterPropertyAssignments | ContainsBlockScopedBinding | ContainsYield | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRest,
        FunctionExcludes = NodeExcludes | ContainsDecorators | ContainsDefaultValueAssignments | ContainsCapturedLexicalThis | ContainsLexicalThis | ContainsParameterPropertyAssignments | ContainsBlockScopedBinding | ContainsYield | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRest,
        ConstructorExcludes = NodeExcludes | ContainsDefaultValueAssignments | ContainsLexicalThis | ContainsCapturedLexicalThis | ContainsBlockScopedBinding | ContainsYield | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRest,
        MethodOrAccessorExcludes = NodeExcludes | ContainsDefaultValueAssignments | ContainsLexicalThis | ContainsCapturedLexicalThis | ContainsBlockScopedBinding | ContainsYield | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRest,
        ClassExcludes = NodeExcludes | ContainsDecorators | ContainsPropertyInitializer | ContainsLexicalThis | ContainsCapturedLexicalThis | ContainsComputedPropertyName | ContainsParameterPropertyAssignments | ContainsLexicalThisInComputedPropertyName,
        ModuleExcludes = NodeExcludes | ContainsDecorators | ContainsLexicalThis | ContainsCapturedLexicalThis | ContainsBlockScopedBinding | ContainsHoistedDeclarationOrCompletion,
        TypeExcludes = ~ContainsTypeScript,
        ObjectLiteralExcludes = NodeExcludes | ContainsDecorators | ContainsComputedPropertyName | ContainsLexicalThisInComputedPropertyName | ContainsObjectSpread,
        ArrayLiteralOrCallOrNewExcludes = NodeExcludes | ContainsSpread,
        VariableDeclarationListExcludes = NodeExcludes | ContainsBindingPattern | ContainsObjectRest,
        ParameterExcludes = NodeExcludes,
        CatchClauseExcludes = NodeExcludes | ContainsObjectRest,
        BindingPatternExcludes = NodeExcludes | ContainsRest,

        // Masks
        // - Additional bitmasks
        /** 类的语法面具 */
        TypeScriptClassSyntaxMask = ContainsParameterPropertyAssignments | ContainsPropertyInitializer | ContainsDecorators,
        ES2015FunctionSyntaxMask = ContainsCapturedLexicalThis | ContainsDefaultValueAssignments,
    }

    export interface SourceMapRange extends TextRange {
        source?: SourceMapSource;
    }

    export interface SourceMapSource {
        fileName: string;
        text: string;
        /* @internal */ lineMap: number[];
        skipTrivia?: (pos: number) => number;
    }

    /* @internal */
    export interface EmitNode {
        annotatedNodes?: Node[];                 // Tracks Parse-tree nodes with EmitNodes for eventual cleanup.
        flags?: EmitFlags;                       // Flags that customize emit
        leadingComments?: SynthesizedComment[];  // Synthesized leading comments
        trailingComments?: SynthesizedComment[]; // Synthesized trailing comments
        commentRange?: TextRange;                // The text range to use when emitting leading or trailing comments
        sourceMapRange?: SourceMapRange;         // The text range to use when emitting leading or trailing source mappings
        tokenSourceMapRanges?: SourceMapRange[]; // The text range to use when emitting source mappings for tokens
        constantValue?: string | number;         // The constant value of an expression
        externalHelpersModuleName?: Identifier;  // The local name for an imported helpers module
        helpers?: EmitHelper[];                  // Emit helpers for the node
    }

    export const enum EmitFlags {
        SingleLine = 1 << 0,                    // The contents of this node should be emitted on a single line.
        AdviseOnEmitNode = 1 << 1,              // The printer should invoke the onEmitNode callback when printing this node.
        NoSubstitution = 1 << 2,                // Disables further substitution of an expression.
        CapturesThis = 1 << 3,                  // The function captures a lexical `this`
        NoLeadingSourceMap = 1 << 4,            // Do not emit a leading source map location for this node.
        NoTrailingSourceMap = 1 << 5,           // Do not emit a trailing source map location for this node.
        NoSourceMap = NoLeadingSourceMap | NoTrailingSourceMap, // Do not emit a source map location for this node.
        NoNestedSourceMaps = 1 << 6,            // Do not emit source map locations for children of this node.
        NoTokenLeadingSourceMaps = 1 << 7,      // Do not emit leading source map location for token nodes.
        NoTokenTrailingSourceMaps = 1 << 8,     // Do not emit trailing source map location for token nodes.
        NoTokenSourceMaps = NoTokenLeadingSourceMaps | NoTokenTrailingSourceMaps, // Do not emit source map locations for tokens of this node.
        NoLeadingComments = 1 << 9,             // Do not emit leading comments for this node.
        NoTrailingComments = 1 << 10,           // Do not emit trailing comments for this node.
        NoComments = NoLeadingComments | NoTrailingComments, // Do not emit comments for this node.
        NoNestedComments = 1 << 11,
        HelperName = 1 << 12,
        ExportName = 1 << 13,                   // Ensure an export prefix is added for an identifier that points to an exported declaration with a local name (see SymbolFlags.ExportHasLocal).
        LocalName = 1 << 14,                    // Ensure an export prefix is not added for an identifier that points to an exported declaration.
        InternalName = 1 << 15,                 // The name is internal to an ES5 class body function.
        Indented = 1 << 16,                     // Adds an explicit extra indentation level for class and function bodies when printing (used to match old emitter).
        NoIndentation = 1 << 17,                // Do not indent the node.
        AsyncFunctionBody = 1 << 18,
        ReuseTempVariableScope = 1 << 19,       // Reuse the existing temp variable scope during emit.
        CustomPrologue = 1 << 20,               // Treat the statement as if it were a prologue directive (NOTE: Prologue directives are *not* transformed).
        NoHoisting = 1 << 21,                   // Do not hoist this declaration in --module system
        HasEndOfDeclarationMarker = 1 << 22,    // Declaration has an associated NotEmittedStatement to mark the end of the declaration
        Iterator = 1 << 23,                     // The expression to a `yield*` should be treated as an Iterator when down-leveling, not an Iterable.
        NoAsciiEscaping = 1 << 24,              // When synthesizing nodes that lack an original node or textSourceNode, we want to write the text on the node with ASCII escaping substitutions.
    }

    export interface EmitHelper {
        readonly name: string;      // A unique name for this helper.
        readonly scoped: boolean;   // 指示助手必须在当前范围内发射。
        readonly text: string;      // ES3-compatible raw script text.
        readonly priority?: number; // Helpers with a higher priority are emitted earlier than other helpers on the node.
    }

    /**
     * Used by the checker, this enum keeps track of external emit helpers that should be type
     * checked.
     */
    /* @internal */
    export const enum ExternalEmitHelpers {
        Extends = 1 << 0,           // __extends (used by the ES2015 class transformation)
        Assign = 1 << 1,            // __assign (used by Jsx and ESNext object spread transformations)
        Rest = 1 << 2,              // __rest (used by ESNext object rest transformation)
        Decorate = 1 << 3,          // __decorate (used by TypeScript decorators transformation)
        Metadata = 1 << 4,          // __metadata (used by TypeScript decorators transformation)
        Param = 1 << 5,             // __param (used by TypeScript decorators transformation)
        Awaiter = 1 << 6,           // __awaiter (used by ES2017 async functions transformation)
        Generator = 1 << 7,         // __generator (used by ES2015 generator transformation)
        Values = 1 << 8,            // __values (used by ES2015 for..of and yield* transformations)
        Read = 1 << 9,              // __read (used by ES2015 iterator destructuring transformation)
        Spread = 1 << 10,           // __spread (used by ES2015 array spread and argument list spread transformations)
        Await = 1 << 11,            // __await (used by ES2017 async generator transformation)
        AsyncGenerator = 1 << 12,   // __asyncGenerator (used by ES2017 async generator transformation)
        AsyncDelegator = 1 << 13,   // __asyncDelegator (used by ES2017 async generator yield* transformation)
        AsyncValues = 1 << 14,      // __asyncValues (used by ES2017 for..await..of transformation)
        ExportStar = 1 << 15,       // __exportStar (used by CommonJS/AMD/UMD module transformation)
        助手 = 1 << 16,       // __助手 (used by CommonJS/AMD/UMD module transformation)

        // Helpers included by ES2015 for..of
        ForOfIncludes = Values,

        // Helpers included by ES2017 for..await..of
        ForAwaitOfIncludes = AsyncValues,

        // Helpers included by ES2017 async generators
        AsyncGeneratorIncludes = Await | AsyncGenerator,

        // Helpers included by yield* in ES2017 async generators
        AsyncDelegatorIncludes = Await | AsyncDelegator | AsyncValues,

        // Helpers included by ES2015 spread
        SpreadIncludes = Read | Spread,

        FirstEmitHelper = Extends,
        LastEmitHelper = 助手
    }

    export const enum EmitHint {
        SourceFile,         // Emitting a SourceFile
        Expression,         // Emitting an Expression
        IdentifierName,     // Emitting an IdentifierName
        Unspecified,        // Emitting an otherwise unspecified node
    }

    /* @internal */
    export interface EmitHost extends ScriptReferenceHost {
        getSourceFiles(): SourceFile[];

        /* @internal */
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;

        getCommonSourceDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;

        isEmitBlocked(emitFileName: string): boolean;

        writeFile: WriteFileCallback;
    }

    export interface TransformationContext {
        /*@internal*/ getEmitResolver(): EmitResolver;
        /*@internal*/ getEmitHost(): EmitHost;

        /** 取编译选项集 */
        getCompilerOptions(): CompilerOptions;

        /** 启动词汇环境. */
        startLexicalEnvironment(): void;

        /** 暂停词汇环境 */
        suspendLexicalEnvironment(): void;

        /** 复位词汇环境 */
        resumeLexicalEnvironment(): void;

        /** 结束词汇环境 */
        endLexicalEnvironment(): Statement[];

        /** 提升函数声明包含的范围 */
        hoistFunctionDeclaration(node: FunctionDeclaration): void;

        /** 提升变量声明范围 */
        hoistVariableDeclaration(node: Identifier): void;

        /** 请求发射助手 */
        requestEmitHelper(helper: EmitHelper): void;

        /** 读发射助手 */
        readEmitHelpers(): EmitHelper[] | undefined;

        /** 启用替换 */
        enableSubstitution(kind: SyntaxKind): void;

        /** 是可以替换 */
        isSubstitutionEnabled(node: Node): boolean;

        /**
         * Hook used by transformers to substitute expressions just before they
         * are emitted by the pretty printer.
         * 通过转换器代替表达式之前他们被漂亮的打印机发出的钩子。
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         * 注意: 转型挂钩只能修改转换器 `初始化期间`，回国前的` nodetransformer `回调。
         */
        onSubstituteNode: (hint: EmitHint, node: Node) => Node;

        /**
         * Enables before/after emit notifications in the pretty printer for the provided
         * SyntaxKind.
         * 使发出通知
         */
        enableEmitNotification(kind: SyntaxKind): void;

        /**
         * Determines whether before/after emit notifications should be raised in the pretty
         * printer when it emits a node.
         * 决定 前/后或通知是否应提出在漂亮的打印机时，它发射节点。
         */
        isEmitNotificationEnabled(node: Node): boolean;

        /**
         * Hook used to allow transformers to capture state before or after
         * the printer emits a node.
         *
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         */
        onEmitNode: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
    }

    export interface TransformationResult<T extends Node> {
        /** Gets the transformed source files. */
        transformed: T[];

        /** Gets diagnostics for the transformation. */
        diagnostics?: Diagnostic[];

        /**
         * Gets a substitute for a node, if one is available; otherwise, returns the original node.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to substitute.
         */
        substituteNode(hint: EmitHint, node: Node): Node;

        /**
         * Emits a node with possible notification.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emitCallback A callback used to emit the node.
         */
        emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;

        /**
         * Clean up EmitNode entries on any parse-tree nodes.
         */
        dispose(): void;
    }

    /**
     * A function that is used to initialize and return a `Transformer` callback, which in turn
     * will be used to transform one or more nodes.
     */
    export type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;

    /**
     * A function that transforms a node.
     */
    export type Transformer<T extends Node> = (node: T) => T;

    /**
     * A function that accepts and possibly transforms a node.
     */
    export type Visitor = (node: Node) => VisitResult<Node>;

    export type VisitResult<T extends Node> = T | T[] | undefined;

    export interface Printer {
        /**
         * Print a node and its subtree as-is, without any emit transformations.
         * @param hint A value indicating the purpose of a node. This is primarily used to
         * distinguish between an `Identifier` used in an expression position, versus an
         * `Identifier` used as an `IdentifierName` as part of a declaration. For most nodes you
         * should just pass `Unspecified`.
         * @param node The node to print. The node and its subtree are printed as-is, without any
         * emit transformations.
         * @param sourceFile A source file that provides context for the node. The source text of
         * the file is used to emit the original source content for literals and identifiers, while
         * the identifiers of the source file are used when generating unique names to avoid
         * collisions.
         */
        printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string;
        /**
         * Prints a source file as-is, without any emit transformations.
         */
        printFile(sourceFile: SourceFile): string;
        /**
         * Prints a bundle of source files as-is, without any emit transformations.
         */
        printBundle(bundle: Bundle): string;
        /*@internal*/ writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
        /*@internal*/ writeFile(sourceFile: SourceFile, writer: EmitTextWriter): void;
        /*@internal*/ writeBundle(bundle: Bundle, writer: EmitTextWriter): void;
    }

    export interface PrintHandlers {
        /**
         * A hook used by the Printer when generating unique names to avoid collisions with
         * globally defined names that exist outside of the current source file.
         */
        hasGlobalName?(name: string): boolean;
        /**
         * A hook used by the Printer to provide notifications prior to emitting a node. A
         * compatible implementation **must** invoke `emitCallback` with the provided `hint` and
         * `node` values.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @param emitCallback A callback that, when invoked, will emit the node.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   onEmitNode(hint, node, emitCallback) {
         *     // set up or track state prior to emitting the node...
         *     emitCallback(hint, node);
         *     // restore state after emitting the node...
         *   }
         * });
         * ```
         */
        onEmitNode?(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * A hook used by the Printer to perform just-in-time substitution of a node. This is
         * primarily used by node transformations that need to substitute one node for another,
         * such as replacing `myExportedVar` with `exports.myExportedVar`.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   substituteNode(hint, node) {
         *     // perform substitution if necessary...
         *     return node;
         *   }
         * });
         * ```
         */
        substituteNode?(hint: EmitHint, node: Node): Node;
        /*@internal*/ onEmitSourceMapOfNode?: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
        /*@internal*/ onEmitSourceMapOfToken?: (node: Node, token: SyntaxKind, pos: number, emitCallback: (token: SyntaxKind, pos: number) => number) => number;
        /*@internal*/ onEmitSourceMapOfPosition?: (pos: number) => void;
        /*@internal*/ onEmitHelpers?: (node: Node, writeLines: (text: string) => void) => void;
        /*@internal*/ onSetSourceFile?: (node: SourceFile) => void;
        /*@internal*/ onBeforeEmitNodeArray?: (nodes: NodeArray<any>) => void;
        /*@internal*/ onAfterEmitNodeArray?: (nodes: NodeArray<any>) => void;
        /*@internal*/ onBeforeEmitToken?: (node: Node) => void;
        /*@internal*/ onAfterEmitToken?: (node: Node) => void;
    }

    export interface PrinterOptions {
        removeComments?: boolean;
        newLine?: NewLineKind;
        /*@internal*/ sourceMap?: boolean;
        /*@internal*/ inlineSourceMap?: boolean;
        /*@internal*/ extendedDiagnostics?: boolean;
    }

    /*@internal*/
    export interface EmitTextWriter {
        write(s: string): void;
        writeTextOfNode(text: string, node: Node, 文件种类: 文件种类): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        getText(): string;
        rawWrite(s: string): void;
        writeLiteral(s: string): void;
        getTextPos(): number;
        getLine(): number;
        getColumn(): number;
        getIndent(): number;
        isAtStartOfLine(): boolean;
        reset(): void;
    }

    export interface TextSpan {
        start: number;
        length: number;
    }

    export interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }

    /* @internal */
    export interface DiagnosticCollection {
        // Adds a diagnostic to this diagnostic collection.
        add(diagnostic: Diagnostic): void;

        // Gets all the diagnostics that aren't associated with a file.
        getGlobalDiagnostics(): Diagnostic[];

        // If fileName is provided, gets all the diagnostics associated with that file name.
        // Otherwise, returns all the diagnostics (global and file associated) in this collection.
        getDiagnostics(fileName?: string): Diagnostic[];

        // Gets a count of how many times this collection has been modified.  This value changes
        // each time 'add' is called (regardless of whether or not an equivalent diagnostic was
        // already in the collection).  As such, it can be used as a simple way to tell if any
        // operation caused diagnostics to be returned by storing and comparing the return value
        // of this method before/after the operation is performed.
        getModificationCount(): number;

        /* @internal */ reattachFileDiagnostics(newFile: SourceFile): void;
    }

    // SyntaxKind.SyntaxList
    export interface SyntaxList extends Node {
        _children: Node[];
    }
}
namespace ts {

    export interface 词典键 extends Node {
        kind: SyntaxKind.词典键 | SyntaxKind.词典值;
        name: Identifier | StringLiteral;
    }
    export interface 词典值 extends Node {
        kind: SyntaxKind.词典值 | SyntaxKind.词典键;
        name: Identifier | StringLiteral;
    }
    export interface 词典 extends Expression {
        kind: SyntaxKind.词典表达式;
        键: 词典键;
        值: 词典值;
        是局部词典?: 别名旗帜;
        是单向词典?: 别名旗帜;
        是内置词典?: 别名旗帜;
        是文本字面量词典?: 别名旗帜;
        词典类别?: 别名旗帜;
        引用节点?: Map<DeclarationName>;
    }

    export const enum 别名旗帜 {
        空 = 0,
        英汉 = 1,
        汉英 = 1 << 1,
        字面量 = 1 << 2,
        局部词典 = 1 << 3,
        单向词典 = 1 << 4,
        内置词典 = 1 << 5,
        是全局导出 = 1 << 6
    }

    export interface 别名 {
        旗帜: 别名旗帜;
        名称: __String;
    }

    export type 别名组 = UnderscoreEscapedMap<别名[]>;

    export interface 全局词典语句 extends Statement {
        kind: SyntaxKind.全局词典语句;
        表达式: NodeArray<词典>;
    }

    export interface 局部词典语句 extends Statement {
        kind: SyntaxKind.局部词典语句;
        表达式: NodeArray<词典>;
    }

}